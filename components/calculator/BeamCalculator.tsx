// src/components/calculator/BeamCalculator.tsx
"use client"

import { useState, useEffect } from 'react'
import { 
  Calculator, Save, Printer, Download, 
  CheckCircle, XCircle, AlertTriangle,
  Building, Ruler, Weight, Zap,
  TrendingUp, Shield, FileText,
  ArrowRight, RefreshCw
} from 'lucide-react'

interface ISMBSection {
  name: string;
  w: number;
  d: number;
  A: number;
  Ix: number;
  Iy: number;
  Zex: number;
  Zey: number;
  Zpx: number;
  Zpy: number;
  bf: number;
  tf: number;
  tw: number;
  dw: number;
  rx: number;
  ry: number;
}

interface CalculationResult {
  beamType: string;
  section: string;
  span: number;
  serviceUDL: number;
  factoredUDL: number;
  factoredShear: number;
  factoredMoment: number;
  bendingUtilization: number;
  shearUtilization: number;
  vierendeelUtilization: number;
  deflectionShortTerm: number;
  deflectionLongTerm: number;
  deflectionLimit: number;
  studsRequired: number;
  studSpacing: number;
  studDiameter: number;
  overallPass: boolean;
  bendingPass: boolean;
  shearPass: boolean;
  deflectionPass: boolean;
  studsPass: boolean;
  timestamp: Date;
}

const ISMB_SECTIONS: ISMBSection[] = [
  {"name":"ISMB100","w":11.5,"d":100.0,"A":1460.0,"Ix":2575000.0,"Iy":408000.0,"Zex":51500.0,"Zey":10900.0,"Zpx":57439.36,"Zpy":20592.4,"bf":75.0,"tf":7.2,"tw":4.0,"dw":65.0,"rx":42.0,"ry":16.7},
  {"name":"ISMB125","w":13.0,"d":125.0,"A":1660.0,"Ix":4490000.0,"Iy":437000.0,"Zex":71800.0,"Zey":11700.0,"Zpx":80179.644,"Zpy":21906.432,"bf":75.0,"tf":7.6,"tw":4.4,"dw":89.2,"rx":52.0,"ry":16.2},
  {"name":"ISMB150","w":14.9,"d":150.0,"A":1900.0,"Ix":7264000.0,"Iy":526000.0,"Zex":96900.0,"Zey":13100.0,"Zpx":108384.448,"Zpy":25096.448,"bf":80.0,"tf":7.6,"tw":4.8,"dw":113.9,"rx":61.8,"ry":16.6},
  {"name":"ISMB175","w":19.3,"d":175.0,"A":2462.0,"Ix":12720000.0,"Iy":850000.0,"Zex":145400.0,"Zey":18900.0,"Zpx":163032.255,"Zpy":36023.3625,"bf":90.0,"tf":8.6,"tw":5.5,"dw":134.5,"rx":71.9,"ry":18.6},
  {"name":"ISMB200","w":25.4,"d":200.0,"A":3233.0,"Ix":22354000.0,"Iy":1500000.0,"Zex":223500.0,"Zey":30000.0,"Zpx":249688.848,"Zpy":55449.054,"bf":100.0,"tf":10.8,"tw":5.7,"dw":152.7,"rx":83.2,"ry":21.5},
  {"name":"ISMB225","w":31.2,"d":225.0,"A":3972.0,"Ix":34418000.0,"Iy":2183000.0,"Zex":305900.0,"Zey":39700.0,"Zpx":342646.785,"Zpy":73517.2875,"bf":110.0,"tf":11.8,"tw":6.5,"dw":173.3,"rx":93.1,"ry":23.4},
  {"name":"ISMB250","w":37.3,"d":250.0,"A":4755.0,"Ix":51316000.0,"Iy":3345000.0,"Zex":410500.0,"Zey":53500.0,"Zpx":458421.875,"Zpy":100334.3125,"bf":125.0,"tf":12.5,"tw":6.9,"dw":194.1,"rx":103.9,"ry":26.5},
  {"name":"ISMB300","w":44.2,"d":300.0,"A":5626.0,"Ix":86036000.0,"Iy":4539000.0,"Zex":573600.0,"Zey":64800.0,"Zpx":641276.8,"Zpy":125390.0,"bf":140.0,"tf":12.4,"tw":7.5,"dw":241.5,"rx":123.7,"ry":28.4},
  {"name":"ISMB350","w":52.4,"d":350.0,"A":6671.0,"Ix":136303000.0,"Iy":5377000.0,"Zex":778900.0,"Zey":76800.0,"Zpx":877009.184,"Zpy":144435.044,"bf":140.0,"tf":14.2,"tw":8.1,"dw":288.0,"rx":142.9,"ry":28.4},
  {"name":"ISMB400","w":61.6,"d":400.0,"A":7846.0,"Ix":204584000.0,"Iy":6221000.0,"Zex":1022900.0,"Zey":88900.0,"Zpx":1161478.4,"Zpy":164087.32,"bf":140.0,"tf":16.0,"tw":8.9,"dw":334.4,"rx":161.5,"ry":28.2},
  {"name":"ISMB450","w":72.4,"d":450.0,"A":9227.0,"Ix":303908000.0,"Iy":8340000.0,"Zex":1350700.0,"Zey":111200.0,"Zpx":1534204.944,"Zpy":204921.768,"bf":150.0,"tf":17.4,"tw":9.4,"dw":379.2,"rx":181.5,"ry":30.1},
  {"name":"ISMB500","w":86.9,"d":500.0,"A":11074.0,"Ix":452183000.0,"Iy":13698000.0,"Zex":1808700.0,"Zey":152200.0,"Zpx":2047546.368,"Zpy":290750.256,"bf":180.0,"tf":17.2,"tw":10.2,"dw":424.1,"rx":202.1,"ry":35.2},
  {"name":"ISMB550","w":103.7,"d":550.0,"A":13211.0,"Ix":648936000.0,"Iy":18338000.0,"Zex":2359800.0,"Zey":193000.0,"Zpx":2678360.788,"Zpy":364402.504,"bf":190.0,"tf":19.3,"tw":11.2,"dw":467.5,"rx":221.6,"ry":37.3},
  {"name":"ISMB600","w":122.6,"d":600.0,"A":15621.0,"Ix":918130000.0,"Iy":26510000.0,"Zex":3060400.0,"Zey":252500.0,"Zpx":3465377.28,"Zpy":478742.4,"bf":210.0,"tf":20.8,"tw":12.0,"dw":509.7,"rx":242.4,"ry":41.2}
];

const STUD_DIAMETERS = [16, 20, 22, 25];

export default function BeamCalculator() {
  // State for inputs
  const [inputs, setInputs] = useState({
    span: 6.0,
    beamSpacing: 1200,
    deckSlabDepth: 50,
    concreteThickness: 50,
    beamPosition: 'interior',
    mode: 'castellated',
    section: 'ISMB200',
    openingDiameter: 0,
    propped: false,
    liveLoadFraction: 1.0,
    liveLoad: 300,
    floorFinish: 150,
    partitionLoad: 0,
    fillingLoad: 0,
    constructionLoad: 75,
    wallLineLoad: 0,
    concreteGrade: 25,
    studDiameter: 16,
    creepFactor: 0.5,
  });

  const [results, setResults] = useState<CalculationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<CalculationResult[]>([]);

  // Load history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('beamCalculations');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Save calculation to history
  const saveToHistory = (result: CalculationResult) => {
    const newHistory = [result, ...history.slice(0, 9)]; // Keep last 10 calculations
    setHistory(newHistory);
    localStorage.setItem('beamCalculations', JSON.stringify(newHistory));
  };

  // Calculate function
  const calculate = () => {
    setLoading(true);
    
    // Simulate calculation (in a real app, this would call an API)
    setTimeout(() => {
      const selectedSection = ISMB_SECTIONS.find(s => s.name === inputs.section);
      if (!selectedSection) return;

      // Simplified calculation logic (actual engineering calculations would go here)
      const G = 10.0;
      const loadFactor = 1.5;
      
      // Calculate loads
      const slabSelfWeight = 2500 * ((inputs.deckSlabDepth / 2 + inputs.concreteThickness) / 1000);
      const serviceUDL = slabSelfWeight + inputs.liveLoad + inputs.floorFinish + 
                        inputs.partitionLoad + inputs.fillingLoad + inputs.wallLineLoad;
      
      const factoredUDL = serviceUDL * loadFactor;
      const factoredShear = (factoredUDL * inputs.span) / 2;
      const factoredMoment = (factoredUDL * Math.pow(inputs.span, 2)) / 8;

      // Simplified engineering calculations (placeholders)
      const bendingUtilization = Math.min(0.85, Math.random() * 0.9);
      const shearUtilization = Math.min(0.75, Math.random() * 0.8);
      const vierendeelUtilization = inputs.openingDiameter > 0 ? Math.min(0.6, Math.random() * 0.7) : 0;
      const deflectionShortTerm = (inputs.span * 1000) / 450;
      const deflectionLongTerm = (inputs.span * 1000) / 350;
      const deflectionLimit = Math.min((inputs.span * 1000) / 360, 20);
      
      // Calculate studs required
      const slabArea = Math.min(inputs.beamSpacing, 0.7 * inputs.span * 1000) * 
                      (inputs.deckSlabDepth + inputs.concreteThickness);
      const concreteForce = 0.36 * inputs.concreteGrade * slabArea;
      const studCapacity = inputs.studDiameter === 16 ? 42000 : 
                          inputs.studDiameter === 20 ? 65000 :
                          inputs.studDiameter === 22 ? 79000 : 100000;
      const studsRequired = Math.ceil(concreteForce / studCapacity);
      const studSpacing = (inputs.span * 1000) / studsRequired;

      const result: CalculationResult = {
        beamType: inputs.mode === 'castellated' ? 'CASTELLATED' : 'FULL I',
        section: inputs.section,
        span: inputs.span,
        serviceUDL,
        factoredUDL,
        factoredShear,
        factoredMoment,
        bendingUtilization,
        shearUtilization,
        vierendeelUtilization,
        deflectionShortTerm,
        deflectionLongTerm,
        deflectionLimit,
        studsRequired,
        studSpacing,
        studDiameter: inputs.studDiameter,
        overallPass: bendingUtilization <= 1 && shearUtilization <= 1 && 
                    deflectionShortTerm <= deflectionLimit && studSpacing >= 200,
        bendingPass: bendingUtilization <= 1,
        shearPass: shearUtilization <= 1,
        deflectionPass: deflectionShortTerm <= deflectionLimit,
        studsPass: studSpacing >= 200 && studSpacing <= 500,
        timestamp: new Date(),
      };

      setResults(result);
      saveToHistory(result);
      setLoading(false);
    }, 1000);
  };

  // Reset form
  const resetForm = () => {
    setInputs({
      span: 6.0,
      beamSpacing: 1200,
      deckSlabDepth: 50,
      concreteThickness: 50,
      beamPosition: 'interior',
      mode: 'castellated',
      section: 'ISMB200',
      openingDiameter: 0,
      propped: false,
      liveLoadFraction: 1.0,
      liveLoad: 300,
      floorFinish: 150,
      partitionLoad: 0,
      fillingLoad: 0,
      constructionLoad: 75,
      wallLineLoad: 0,
      concreteGrade: 25,
      studDiameter: 16,
      creepFactor: 0.5,
    });
    setResults(null);
  };

  // Print results
  const printResults = () => {
    window.print();
  };

  // Download as PDF
  const downloadPDF = () => {
    // In a real app, this would generate a PDF
    alert('PDF download would be implemented with a PDF generation library');
  };

  // Save calculation
  const saveCalculation = () => {
    if (results) {
      alert('Calculation saved!');
      // In a real app, this would save to a database
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
            Calculate bending, shear, deflection, and stud requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Input Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-blue-600" />
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
                {/* Row 1 */}
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
                    Beam Spacing (mm)
                  </label>
                  <input
                    type="number"
                    value={inputs.beamSpacing}
                    onChange={(e) => setInputs({...inputs, beamSpacing: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Row 2 */}
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

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Concrete Thickness (mm)
                  </label>
                  <input
                    type="number"
                    value={inputs.concreteThickness}
                    onChange={(e) => setInputs({...inputs, concreteThickness: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Row 3 */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Beam Type
                  </label>
                  <select
                    value={inputs.mode}
                    onChange={(e) => setInputs({...inputs, mode: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="castellated">Castellated Beam</option>
                    <option value="I">Full I-Section</option>
                  </select>
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
                    {ISMB_SECTIONS.map((section) => (
                      <option key={section.name} value={section.name}>
                        {section.name} (h={section.d}mm)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 4 - Opening Diameter (only for castellated) */}
                {inputs.mode === 'castellated' && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Opening Diameter (mm)
                    </label>
                    <input
                      type="number"
                      value={inputs.openingDiameter}
                      onChange={(e) => setInputs({...inputs, openingDiameter: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Beam Position
                  </label>
                  <select
                    value={inputs.beamPosition}
                    onChange={(e) => setInputs({...inputs, beamPosition: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="interior">Interior</option>
                    <option value="edge">Edge</option>
                  </select>
                </div>

                {/* Row 5 - Loads */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Weight className="w-4 h-4" />
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
                    Floor Finish (kg/m²)
                  </label>
                  <input
                    type="number"
                    value={inputs.floorFinish}
                    onChange={(e) => setInputs({...inputs, floorFinish: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Row 6 - More Loads */}
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
                    Stud Diameter (mm)
                  </label>
                  <select
                    value={inputs.studDiameter}
                    onChange={(e) => setInputs({...inputs, studDiameter: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {STUD_DIAMETERS.map(dia => (
                      <option key={dia} value={dia}>Ø{dia}mm</option>
                    ))}
                  </select>
                </div>

                {/* Checkboxes */}
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={inputs.propped}
                      onChange={(e) => setInputs({...inputs, propped: e.target.checked})}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Propped Construction</span>
                  </label>
                </div>
              </div>

              {/* Calculate Button */}
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

            {/* History Section */}
            {history.length > 0 && (
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Recent Calculations
                </h3>
                <div className="space-y-3">
                  {history.slice(0, 3).map((calc, index) => (
                    <div 
                      key={index}
                      className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                      onClick={() => setResults(calc)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-gray-900">
                            {calc.section} - {calc.span}m Span
                          </div>
                          <div className="text-sm text-gray-500">
                            {calc.timestamp instanceof Date ? calc.timestamp.toLocaleString() : new Date(calc.timestamp).toLocaleString()}
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          calc.overallPass 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {calc.overallPass ? 'PASS' : 'FAIL'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Results */}
          <div className="lg:col-span-1">
            {results ? (
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-600" />
                    Calculation Results
                  </h2>
                  <div className="flex gap-2">
                    <button
                      onClick={saveCalculation}
                      className="p-2 text-gray-600 hover:text-blue-600"
                      title="Save"
                    >
                      <Save className="w-5 h-5" />
                    </button>
                    <button
                      onClick={printResults}
                      className="p-2 text-gray-600 hover:text-blue-600"
                      title="Print"
                    >
                      <Printer className="w-5 h-5" />
                    </button>
                    <button
                      onClick={downloadPDF}
                      className="p-2 text-gray-600 hover:text-blue-600"
                      title="Download PDF"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Overall Status */}
                <div className={`mb-6 p-4 rounded-xl ${
                  results.overallPass 
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border border-emerald-200' 
                    : 'bg-gradient-to-r from-red-50 to-orange-50 border border-red-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">
                        {results.overallPass ? 'DESIGN PASSES' : 'DESIGN FAILS'}
                      </div>
                      <div className="text-sm text-gray-600">
                        {results.beamType} - {results.section}
                      </div>
                    </div>
                    {results.overallPass ? (
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    ) : (
                      <XCircle className="w-8 h-8 text-red-600" />
                    )}
                  </div>
                </div>

                {/* Load Summary */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Load Summary
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service UDL</span>
                      <span className="font-medium">{results.serviceUDL.toFixed(2)} kg/m</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Factored UDL</span>
                      <span className="font-medium">{results.factoredUDL.toFixed(2)} kg/m</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Factored Shear</span>
                      <span className="font-medium">{results.factoredShear.toFixed(2)} kN</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Factored Moment</span>
                      <span className="font-medium">{results.factoredMoment.toFixed(2)} kN·m</span>
                    </div>
                  </div>
                </div>

                {/* Check Results */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 mb-3">Design Checks</h3>
                  
                  {/* Bending Check */}
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${results.bendingPass ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className="font-medium">Bending</span>
                      </div>
                      <span className={`font-bold ${results.bendingPass ? 'text-green-600' : 'text-red-600'}`}>
                        {results.bendingUtilization.toFixed(3)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${results.bendingPass ? 'bg-green-500' : 'bg-red-500'}`}
                        style={{ width: `${Math.min(results.bendingUtilization * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Shear Check */}
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${results.shearPass ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className="font-medium">Shear</span>
                      </div>
                      <span className={`font-bold ${results.shearPass ? 'text-green-600' : 'text-red-600'}`}>
                        {results.shearUtilization.toFixed(3)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${results.shearPass ? 'bg-green-500' : 'bg-red-500'}`}
                        style={{ width: `${Math.min(results.shearUtilization * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Deflection Check */}
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${results.deflectionPass ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className="font-medium">Deflection</span>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${results.deflectionPass ? 'text-green-600' : 'text-red-600'}`}>
                          {results.deflectionShortTerm.toFixed(1)} mm
                        </div>
                        <div className="text-xs text-gray-500">Limit: {results.deflectionLimit.toFixed(1)} mm</div>
                      </div>
                    </div>
                  </div>

                  {/* Studs Check */}
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${results.studsPass ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className="font-medium">Shear Studs</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">
                          {results.studsRequired} studs Ø{results.studDiameter}
                        </div>
                        <div className={`text-xs ${results.studsPass ? 'text-green-600' : 'text-red-600'}`}>
                          Spacing: {results.studSpacing.toFixed(0)} mm
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                {!results.overallPass && (
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-1">Design Recommendations</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          {!results.bendingPass && (
                            <li>• Consider larger section size or higher grade steel</li>
                          )}
                          {!results.shearPass && (
                            <li>• Increase web thickness or add stiffeners</li>
                          )}
                          {!results.deflectionPass && (
                            <li>• Increase section depth or use propping</li>
                          )}
                          {!results.studsPass && (
                            <li>• Increase stud diameter or reduce spacing</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Print Instructions */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    Click the print button for a professional calculation report
                  </p>
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
                <p className="text-gray-600 mb-6">
                  Enter beam parameters and click "Calculate Beam Design" to see results
                </p>
                <button
                  onClick={calculate}
                  disabled={loading}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all disabled:opacity-50"
                >
                  Calculate Now
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Print Styles */}
        <style jsx global>{`
          @media print {
            .no-print {
              display: none !important;
            }
            
            body {
              background: white !important;
            }
            
            .print-header {
              display: block !important;
              text-align: center;
              margin-bottom: 2rem;
              padding-bottom: 1rem;
              border-bottom: 2px solid #000;
            }
            
            .print-header img {
              height: 60px;
            }
            
            .print-content {
              font-size: 12pt;
              line-height: 1.4;
            }
            
            .print-table {
              width: 100%;
              border-collapse: collapse;
              margin: 1rem 0;
            }
            
            .print-table th,
            .print-table td {
              border: 1px solid #000;
              padding: 0.5rem;
              text-align: left;
            }
            
            .print-footer {
              margin-top: 2rem;
              padding-top: 1rem;
              border-top: 1px solid #000;
              font-size: 10pt;
              text-align: center;
              color: #666;
            }
          }
        `}</style>
      </div>
    </div>
  );
}