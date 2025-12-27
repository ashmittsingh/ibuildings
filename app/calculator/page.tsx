'use client'

import { useState } from 'react'
import { Calculator, Download, Plus, Trash2, BarChart3 } from 'lucide-react'

interface CalculationResult {
  timestamp: string
  date: string
  section: string
  span: number
  shearForce: string
  bendingMoment: string
  deflection: string
  studsRequired: number
  studSpacing: string
  totalLoad: string
  loads: {
    deadLoad: string
    liveLoad: string
    finishingLoad: string
    partitionLoad: string
    fireLoad: string
    crushLoad: string
  }
}

export default function CompositeBeamCalculator() {
  const [formData, setFormData] = useState({
    span: 6,
    beamSpacing: 3,
    deckDepth: 75,
    topping: 100,
    section: 'ISMB300',
    concreteGrade: 'M30',
    openingDiameter: 25,
    liveLoad: 4,
    finishingLoad: 1.5,
    partitionLoad: 1.5,
    fireLoad: 0.5,
    crushLoad: 0.5,
  })

  const [results, setResults] = useState<CalculationResult | null>(null)
  const [calculationHistory, setCalculationHistory] = useState<CalculationResult[]>([])

  const ismb_sections: Record<string, any> = {
    'ISMB150': { wt: 13.8, d: 150, b: 75, t_f: 7.5, t_w: 5.4, r: 8.5 },
    'ISMB200': { wt: 20.1, d: 200, b: 100, t_f: 8.4, t_w: 5.7, r: 10 },
    'ISMB250': { wt: 28.6, d: 250, b: 125, t_f: 10, t_w: 6.2, r: 12 },
    'ISMB300': { wt: 37.3, d: 300, b: 150, t_f: 10.6, t_w: 6.6, r: 14.5 },
    'ISMB350': { wt: 45.5, d: 350, b: 175, t_f: 11.2, t_w: 7.1, r: 16 },
    'ISMB400': { wt: 56.2, d: 400, b: 200, t_f: 12.5, t_w: 8, r: 18 },
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || value
    }))
  }

  const calculateCompositeBeam = () => {
    const section = ismb_sections[formData.section]
    if (!section) {
      alert('Invalid section selected')
      return
    }

    // Calculations
    const steelWt = section.wt // kg/m
    const concreteArea = formData.beamSpacing * (formData.deckDepth + formData.topping)
    const concreteWt = concreteArea * 25 / 1000 // kg/m (assuming 25 kN/m³)
    
    const totalDL = steelWt + concreteWt
    const totalLL = formData.liveLoad * formData.beamSpacing
    const totalFF = formData.finishingLoad * formData.beamSpacing
    const totalPL = formData.partitionLoad * formData.beamSpacing
    const totalFL = formData.fireLoad * formData.beamSpacing
    const totalCL = formData.crushLoad * formData.beamSpacing

    // Factored loads
    const factorDL = totalDL * 1.35
    const factorLL = totalLL * 1.5
    const factorFF = totalFF * 1.35
    const factorPL = totalPL * 1.35
    const factorFL = totalFL * 1.35
    const factorCL = totalCL * 1.35

    const totalFactoredLoad = factorDL + factorLL + factorFF + factorPL + factorFL + factorCL

    // Shear Force and Bending Moment
    const shearForce = (totalFactoredLoad * formData.span) / 2
    const bendingMoment = (totalFactoredLoad * Math.pow(formData.span, 2)) / 8

    // Deflection calculation (simplified)
    const beamDepth = section.d
    const momentOfInertia = (beamDepth ** 4) / 64 // Simplified calculation
    const youngModulus = 210000 // MPa for steel
    const deflection = (5 * totalFactoredLoad * Math.pow(formData.span * 1000, 4)) / (384 * youngModulus * momentOfInertia)

    // Stud calculation
    const studsRequired = Math.ceil(formData.span / 0.75) // studs @ 750 mm c/c
    const studArea = Math.PI * (formData.openingDiameter / 2) ** 2 / 100
    const studSpacing = (formData.span * 1000) / studsRequired

    const newResult = {
      timestamp: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      section: formData.section,
      span: formData.span,
      shearForce: shearForce.toFixed(2),
      bendingMoment: bendingMoment.toFixed(2),
      deflection: deflection.toFixed(2),
      studsRequired: studsRequired,
      studSpacing: studSpacing.toFixed(0),
      totalLoad: totalFactoredLoad.toFixed(2),
      loads: {
        deadLoad: totalDL.toFixed(2),
        liveLoad: totalLL.toFixed(2),
        finishingLoad: totalFF.toFixed(2),
        partitionLoad: totalPL.toFixed(2),
        fireLoad: totalFL.toFixed(2),
        crushLoad: totalCL.toFixed(2),
      }
    }

    setResults(newResult)
    setCalculationHistory([newResult, ...calculationHistory].slice(0, 10))
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#1A3E6F] mb-2">Composite Beam Calculator</h1>
          <p className="text-gray-600">Advanced analysis and design of composite ISMB sections</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-28">
              <h2 className="text-2xl font-bold text-[#1A3E6F] mb-6 flex items-center gap-2">
                <Calculator className="w-6 h-6" />
                Input Parameters
              </h2>

              <div className="space-y-6">
                {/* Span */}
                <div>
                  <label className="block text-sm font-bold text-[#1A3E6F] mb-2">
                    Span (m) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="span"
                    value={formData.span}
                    onChange={handleInputChange}
                    min="3"
                    max="20"
                    step="0.5"
                    className="w-full border-2 border-[#BFC5CC] rounded-lg px-4 py-2 focus:outline-none focus:border-[#1F86C8]"
                  />
                </div>

                {/* Beam Spacing */}
                <div>
                  <label className="block text-sm font-bold text-[#1A3E6F] mb-2">
                    Beam Spacing (m) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="beamSpacing"
                    value={formData.beamSpacing}
                    onChange={handleInputChange}
                    min="1"
                    max="10"
                    step="0.5"
                    className="w-full border-2 border-[#BFC5CC] rounded-lg px-4 py-2 focus:outline-none focus:border-[#1F86C8]"
                  />
                </div>

                {/* Section */}
                <div>
                  <label className="block text-sm font-bold text-[#1A3E6F] mb-2">
                    ISMB Section <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="section"
                    value={formData.section}
                    onChange={handleInputChange}
                    className="w-full border-2 border-[#BFC5CC] rounded-lg px-4 py-2 focus:outline-none focus:border-[#1F86C8]"
                  >
                    {Object.keys(ismb_sections).map(sec => (
                      <option key={sec} value={sec}>{sec}</option>
                    ))}
                  </select>
                </div>

                {/* Deck Depth */}
                <div>
                  <label className="block text-sm font-bold text-[#1A3E6F] mb-2">Deck Depth (mm)</label>
                  <input
                    type="number"
                    name="deckDepth"
                    value={formData.deckDepth}
                    onChange={handleInputChange}
                    min="50"
                    max="200"
                    step="25"
                    className="w-full border-2 border-[#BFC5CC] rounded-lg px-4 py-2 focus:outline-none focus:border-[#1F86C8]"
                  />
                </div>

                {/* Topping */}
                <div>
                  <label className="block text-sm font-bold text-[#1A3E6F] mb-2">Topping (mm)</label>
                  <input
                    type="number"
                    name="topping"
                    value={formData.topping}
                    onChange={handleInputChange}
                    min="50"
                    max="150"
                    step="25"
                    className="w-full border-2 border-[#BFC5CC] rounded-lg px-4 py-2 focus:outline-none focus:border-[#1F86C8]"
                  />
                </div>

                {/* Live Load */}
                <div>
                  <label className="block text-sm font-bold text-[#1A3E6F] mb-2">Live Load (kN/m²)</label>
                  <input
                    type="number"
                    name="liveLoad"
                    value={formData.liveLoad}
                    onChange={handleInputChange}
                    min="1"
                    max="10"
                    step="0.5"
                    className="w-full border-2 border-[#BFC5CC] rounded-lg px-4 py-2 focus:outline-none focus:border-[#1F86C8]"
                  />
                </div>

                {/* Calculate Button */}
                <button
                  onClick={calculateCompositeBeam}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white rounded-lg font-bold hover:shadow-lg transition-all"
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2 space-y-8">
            {results ? (
              <>
                {/* Main Results */}
                <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#1F86C8]">
                  <h2 className="text-2xl font-bold text-[#1A3E6F] mb-6">Calculation Results</h2>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gradient-to-br from-[#1F86C8]/10 to-[#1A3E6F]/10 p-6 rounded-lg">
                      <p className="text-gray-600 text-sm mb-2">Maximum Shear Force</p>
                      <p className="text-3xl font-bold text-[#1F86C8]">{results.shearForce} <span className="text-sm text-gray-600">kN</span></p>
                    </div>

                    <div className="bg-gradient-to-br from-[#1F86C8]/10 to-[#1A3E6F]/10 p-6 rounded-lg">
                      <p className="text-gray-600 text-sm mb-2">Maximum Bending Moment</p>
                      <p className="text-3xl font-bold text-[#1A3E6F]">{results.bendingMoment} <span className="text-sm text-gray-600">kN·m</span></p>
                    </div>

                    <div className="bg-gradient-to-br from-[#1F86C8]/10 to-[#1A3E6F]/10 p-6 rounded-lg">
                      <p className="text-gray-600 text-sm mb-2">Max Deflection</p>
                      <p className="text-3xl font-bold text-[#1F86C8]">{results.deflection} <span className="text-sm text-gray-600">mm</span></p>
                    </div>

                    <div className="bg-gradient-to-br from-[#1F86C8]/10 to-[#1A3E6F]/10 p-6 rounded-lg">
                      <p className="text-gray-600 text-sm mb-2">Studs Required</p>
                      <p className="text-3xl font-bold text-[#1A3E6F]">{results.studsRequired} <span className="text-sm text-gray-600">nos</span></p>
                    </div>
                  </div>

                  {/* Loads Summary */}
                  <div className="bg-[#F5F7FA] p-6 rounded-lg">
                    <h3 className="font-bold text-[#1A3E6F] mb-4">Load Distribution</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div><span className="text-gray-600">Dead Load:</span> <span className="font-bold">{results.loads.deadLoad} kN/m</span></div>
                      <div><span className="text-gray-600">Live Load:</span> <span className="font-bold">{results.loads.liveLoad} kN/m</span></div>
                      <div><span className="text-gray-600">Finishing Load:</span> <span className="font-bold">{results.loads.finishingLoad} kN/m</span></div>
                      <div><span className="text-gray-600">Partition Load:</span> <span className="font-bold">{results.loads.partitionLoad} kN/m</span></div>
                    </div>
                  </div>

                  <button className="mt-6 w-full px-6 py-3 border-2 border-[#1F86C8] text-[#1F86C8] rounded-lg font-bold hover:bg-[#F5F7FA] transition-all flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Export PDF Report
                  </button>
                </div>

                {/* Calculation History */}
                {calculationHistory.length > 0 && (
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-[#1A3E6F] mb-6">Recent Calculations</h2>
                    <div className="space-y-4">
                      {calculationHistory.slice(0, 5).map((calc, i) => (
                        <div key={i} className="border-l-4 border-[#1F86C8] pl-4 py-2 bg-[#F5F7FA] rounded">
                          <p className="font-semibold text-[#1A3E6F]">{calc.section} - Span {calc.span}m</p>
                          <p className="text-sm text-gray-600">{calc.date} at {calc.timestamp}</p>
                          <p className="text-sm text-gray-700 mt-1">BM: {calc.bendingMoment} kN·m | SF: {calc.shearForce} kN | Studs: {calc.studsRequired}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <BarChart3 className="w-16 h-16 text-[#BFC5CC] mx-auto mb-4 opacity-50" />
                <p className="text-gray-600 text-lg">Enter parameters and click "Calculate" to see results</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}