// src/app/calculator/CompositeBeamCalculator.tsx
"use client"

import { useState } from 'react'
import { Calculator, RefreshCw } from 'lucide-react'

export default function CompositeBeamCalculator() {
  const [inputs, setInputs] = useState({
    span: 6.0,
    beamSpacing: 1200,
    deckSlabDepth: 50,
    concreteThickness: 50,
    section: 'ISMB200',
    liveLoad: 300,
    concreteGrade: 25,
  });

  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const calculate = () => {
    setLoading(true);
    
    setTimeout(() => {
      // Mock calculation
      const result = {
        beamType: 'CASTELLATED',
        section: inputs.section,
        span: inputs.span,
        serviceUDL: 500.25,
        factoredUDL: 750.38,
        factoredShear: 225.11,
        factoredMoment: 337.67,
        bendingUtilization: 0.85,
        shearUtilization: 0.72,
        deflectionShortTerm: 15.5,
        deflectionLimit: 16.67,
        studsRequired: 12,
        studSpacing: 250,
        overallPass: true,
        timestamp: new Date(),
      };

      setResults(result);
      setLoading(false);
    }, 1000);
  };

  const resetForm = () => {
    setInputs({
      span: 6.0,
      beamSpacing: 1200,
      deckSlabDepth: 50,
      concreteThickness: 50,
      section: 'ISMB200',
      liveLoad: 300,
      concreteGrade: 25,
    });
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Composite Beam Calculator
            </h1>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            IS 11384 compliant composite castellated/cellular beam design checker.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Input Parameters
                </h2>
                <button
                  onClick={resetForm}
                  className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reset
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Span Length (m)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={inputs.span}
                    onChange={(e) => setInputs({...inputs, span: parseFloat(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    ISMB Section
                  </label>
                  <select
                    value={inputs.section}
                    onChange={(e) => setInputs({...inputs, section: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="ISMB200">ISMB200 (h=200mm)</option>
                    <option value="ISMB250">ISMB250 (h=250mm)</option>
                    <option value="ISMB300">ISMB300 (h=300mm)</option>
                    <option value="ISMB350">ISMB350 (h=350mm)</option>
                    <option value="ISMB400">ISMB400 (h=400mm)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Live Load (kg/m²)
                  </label>
                  <input
                    type="number"
                    value={inputs.liveLoad}
                    onChange={(e) => setInputs({...inputs, liveLoad: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Concrete Grade fck (MPa)
                  </label>
                  <input
                    type="number"
                    value={inputs.concreteGrade}
                    onChange={(e) => setInputs({...inputs, concreteGrade: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Beam Spacing (mm)
                  </label>
                  <input
                    type="number"
                    value={inputs.beamSpacing}
                    onChange={(e) => setInputs({...inputs, beamSpacing: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Deck Slab Depth (mm)
                  </label>
                  <input
                    type="number"
                    value={inputs.deckSlabDepth}
                    onChange={(e) => setInputs({...inputs, deckSlabDepth: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={calculate}
                  disabled={loading}
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Calculating...
                    </>
                  ) : (
                    <>
                      <Calculator className="w-5 h-5" />
                      Calculate Beam Design
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-1">
            {results ? (
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Calculation Results
                </h2>
                
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-emerald-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-gray-900">DESIGN PASSES</div>
                      <div className="text-sm text-gray-600">
                        {results.beamType} - {results.section}
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      PASS
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Bending Utilization</span>
                      <span className="font-bold text-green-600">
                        {results.bendingUtilization.toFixed(3)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-green-500"
                        style={{ width: `${Math.min(results.bendingUtilization * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Shear Utilization</span>
                      <span className="font-bold text-green-600">
                        {results.shearUtilization.toFixed(3)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-green-500"
                        style={{ width: `${Math.min(results.shearUtilization * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className="text-gray-600">Deflection</div>
                        <div className="text-sm text-gray-500">Limit: {results.deflectionLimit.toFixed(1)} mm</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">
                          {results.deflectionShortTerm.toFixed(1)} mm
                        </div>
                        <div className="text-xs text-green-600">PASS</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="text-gray-600 mb-1">Shear Studs</div>
                    <div className="font-bold">
                      {results.studsRequired} studs @ {results.studSpacing}mm spacing
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="text-gray-600 mb-1">Factored Loads</div>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span>UDL:</span>
                        <span className="font-medium">{results.factoredUDL.toFixed(2)} kg/m</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shear:</span>
                        <span className="font-medium">{results.factoredShear.toFixed(2)} kN</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Moment:</span>
                        <span className="font-medium">{results.factoredMoment.toFixed(2)} kN·m</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                  <Calculator className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  No Calculation Yet
                </h3>
                <p className="text-gray-600">
                  Enter parameters and click &quot;Calculate Beam Design&quot; to see results
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}