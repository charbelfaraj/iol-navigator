import { useState } from "react";

// ===========================
// EXPANDED IOL DATABASE
// ===========================
const IOL_DATABASE = {
  monofocal: {
    standard: [
      // ALCON
      { name: "Clareon (CNA0T0)", manufacturer: "Alcon", type: "Monofocal", material: "Hydrophobic Acrylic (Clareon)", addPower: "N/A", bestFor: "Premium monofocal, ultra-low PCO rate, glistening-free", toric: true, toricModel: "Clareon Toric (CNWT00)", haptic: "C-loop", opticDia: "6.0mm", injector: "AutonoMe / UltraSert" },
      { name: "AcrySof IQ (SN60WF)", manufacturer: "Alcon", type: "Monofocal", material: "Hydrophobic Acrylic (AcrySof)", addPower: "N/A", bestFor: "Proven track record, negative spherical aberration", toric: true, toricModel: "AcrySof IQ Toric (SN6ATx)", haptic: "C-loop (STABLEFORCE)", opticDia: "6.0mm", injector: "Monarch III" },
      // J&J VISION
      { name: "TECNIS 1-Piece (ZCB00)", manufacturer: "J&J Vision", type: "Monofocal", material: "Hydrophobic Acrylic (TECNIS)", addPower: "N/A", bestFor: "Excellent optics, aberration-free aspheric design", toric: true, toricModel: "TECNIS Toric II (ZCT)", haptic: "Tri-Fix modified C-loop", opticDia: "6.0mm", injector: "iTec / Unfolder Platinum" },
      { name: "TECNIS 1-Piece (PCB00)", manufacturer: "J&J Vision", type: "Monofocal", material: "Hydrophobic Acrylic (TECNIS)", addPower: "N/A", bestFor: "Platform lens, frost-free", toric: true, toricModel: "TECNIS Toric II (ZCT)", haptic: "C-loop", opticDia: "6.0mm", injector: "iTec" },
      // HOYA
      { name: "Vivinex iSert XY1 (XY1-SP)", manufacturer: "HOYA", type: "Monofocal", material: "Hydrophobic Acrylic (Vivinex)", addPower: "N/A", bestFor: "Glistening-free, 360° square edge barrier, excellent stability", toric: true, toricModel: "Vivinex Toric XY1T", haptic: "Modified C-loop", opticDia: "6.0mm", injector: "iSert preloaded" },
      { name: "HOYA iSert 251 (XY1A-SP)", manufacturer: "HOYA", type: "Monofocal", material: "Hydrophobic Acrylic", addPower: "N/A", bestFor: "Preloaded system, consistent delivery", toric: false, haptic: "C-loop", opticDia: "6.0mm", injector: "iSert preloaded" },
      // BVI
      { name: "Ankoris (Micro AY)", manufacturer: "BVI", type: "Monofocal", material: "Hydrophilic Acrylic + Hydrophobic surface", addPower: "N/A", bestFor: "Glistening-free, double C-loop, reliable standard lens", toric: true, toricModel: "Ankoris Toric", haptic: "Double C-loop", opticDia: "6.0mm", injector: "Accuject 2" },
      { name: "Eycryl Plus (ECAS6)", manufacturer: "BVI", type: "Monofocal", material: "Hydrophobic Acrylic", addPower: "N/A", bestFor: "Budget-friendly, square edge, single-piece", toric: false, haptic: "C-loop", opticDia: "6.0mm", injector: "Standard" },
      // BAUSCH + LOMB
      { name: "enVista (MX60)", manufacturer: "Bausch + Lomb", type: "Monofocal", material: "Hydrophobic Acrylic", addPower: "N/A", bestFor: "Glistening-free guarantee, stable, aspheric", toric: true, toricModel: "enVista Toric (MX60T)", haptic: "C-loop", opticDia: "6.0mm", injector: "Accuject" },
      { name: "LuxSmart (LX8130T)", manufacturer: "Bausch + Lomb", type: "Monofocal", material: "Hydrophilic + Hydrophobic surface", addPower: "N/A", bestFor: "Preloaded, CE-marked, European market", toric: true, toricModel: "LuxSmart Toric", haptic: "4-haptic plate", opticDia: "6.0mm", injector: "Preloaded" },
      // RAYNER
      { name: "RayOne Aspheric (RAO600C)", manufacturer: "Rayner", type: "Monofocal", material: "Hydrophilic Acrylic (26%)", addPower: "N/A", bestFor: "Fully preloaded, aberration-neutral, global market leader", toric: true, toricModel: "RayOne Toric (RAO620T)", haptic: "Modified C-loop", opticDia: "6.0mm", injector: "RayOne preloaded" },
      // CARL ZEISS
      { name: "CT LUCIA 211P / 211PY", manufacturer: "Carl Zeiss", type: "Monofocal", material: "Hydrophobic Acrylic", addPower: "N/A", bestFor: "Zero-spherical aberration, plate haptic for stability", toric: true, toricModel: "CT LUCIA 621P Toric", haptic: "Plate haptic (4-point fixation)", opticDia: "6.0mm", injector: "BLUEMIXS 180" },
    ],
    enhanced: [
      // J&J VISION
      { name: "TECNIS Eyhance (ICB00)", manufacturer: "J&J Vision", type: "Enhanced Monofocal", material: "Hydrophobic Acrylic (TECNIS)", addPower: "+0.50D continuous", bestFor: "Improved intermediate without dysphotopsia, smooth anterior surface", toric: true, toricModel: "TECNIS Eyhance Toric II (ICT)", haptic: "Tri-Fix modified C-loop", opticDia: "6.0mm", injector: "iTec" },
      // RAYNER
      { name: "RayOne EMV (RAO200)", manufacturer: "Rayner", type: "Enhanced Monofocal", material: "Hydrophilic Acrylic (26%)", addPower: "+0.50D sector-near", bestFor: "Enhanced monofocal with sector near addition, preloaded", toric: true, toricModel: "RayOne EMV Toric", haptic: "Modified C-loop", opticDia: "6.0mm", injector: "RayOne preloaded" },
      // CARL ZEISS
      { name: "CT LUCIA 221P (EDoF)", manufacturer: "Carl Zeiss", type: "Enhanced Monofocal", material: "Hydrophobic Acrylic", addPower: "+0.75D extended range", bestFor: "Extended monofocal, plate haptic stability", toric: false, haptic: "Plate haptic", opticDia: "6.0mm", injector: "BLUEMIXS 180" },
      // JOHNSON & JOHNSON
      { name: "TECNIS PureSee (TM)", manufacturer: "J&J Vision", type: "Enhanced Monofocal", material: "Hydrophobic Acrylic", addPower: "+0.75D enhancement", bestFor: "Next-gen enhanced monofocal, frosted optic edge, reduced PCO", toric: true, toricModel: "TECNIS PureSee Toric", haptic: "C-loop", opticDia: "6.0mm", injector: "iTec" },
    ]
  },
  edof: [
    // ALCON
    { name: "AcrySof IQ Vivity (DFT015)", manufacturer: "Alcon", type: "Non-Diffractive EDOF", material: "Hydrophobic Acrylic (AcrySof)", addPower: "+1.00 to +1.50D (X-WAVE)", bestFor: "Extended range with minimal halos, wavefront-shaping technology", toric: true, toricModel: "Vivity Toric (DFT315/415/515)", haptic: "C-loop (STABLEFORCE)", opticDia: "6.0mm", injector: "AutonoMe" },
    { name: "Clareon Vivity", manufacturer: "Alcon", type: "Non-Diffractive EDOF", material: "Hydrophobic Acrylic (Clareon)", addPower: "+1.00 to +1.50D (X-WAVE)", bestFor: "Clareon platform Vivity, ultra-low PCO + extended range", toric: true, toricModel: "Clareon Vivity Toric", haptic: "C-loop (STABLEFORCE)", opticDia: "6.0mm", injector: "AutonoMe" },
    // J&J VISION
    { name: "TECNIS Symfony (ZXR00)", manufacturer: "J&J Vision", type: "Diffractive EDOF", material: "Hydrophobic Acrylic (TECNIS)", addPower: "+1.75D echelette", bestFor: "Continuous range distance-to-intermediate, achromatic diffractive design", toric: true, toricModel: "TECNIS Symfony Toric (ZXT)", haptic: "Tri-Fix modified C-loop", opticDia: "6.0mm", injector: "Unfolder Platinum / iTec" },
    { name: "TECNIS Synergy (DFR00V)", manufacturer: "J&J Vision", type: "Continuous Range (EDOF + Multifocal)", material: "Hydrophobic Acrylic (TECNIS)", addPower: "+2.0D to +3.5D continuous", bestFor: "Full range: distance through near, diffractive + EDOF hybrid", toric: true, toricModel: "TECNIS Synergy Toric (DFW)", haptic: "Tri-Fix modified C-loop", opticDia: "6.0mm", injector: "iTec" },
    // BVI
    { name: "LENTIS Comfort (LS-313 MF15)", manufacturer: "BVI", type: "Rotationally Asymmetric EDOF", material: "Hydrophilic + Hydrophobic surface", addPower: "+1.50D sector addition", bestFor: "Intermediate vision, no concentric diffractive rings, rotationally asymmetric", toric: true, toricModel: "LENTIS Comfort Toric (LS-313 MF15T)", haptic: "C-loop", opticDia: "6.0mm", injector: "Accuject 2" },
    // HOYA
    { name: "Vivinex IMPRESS (XY1-EM)", manufacturer: "HOYA", type: "EDOF", material: "Hydrophobic Acrylic (Vivinex)", addPower: "+1.50D extended focus", bestFor: "EDOF on glistening-free Vivinex platform, preloaded", toric: true, toricModel: "Vivinex IMPRESS Toric", haptic: "Modified C-loop", opticDia: "6.0mm", injector: "iSert preloaded" },
    // SAiFi
    { name: "Mini WELL Ready", manufacturer: "SIFI", type: "Progressive EDOF", material: "Hydrophobic Acrylic", addPower: "Progressive (dual-face wavefront)", bestFor: "Progressive EDOF, non-diffractive, low dysphotopsia", toric: false, haptic: "Double C-loop", opticDia: "6.0mm", injector: "Standard" },
  ],
  multifocal: [
    // ALCON
    { name: "AcrySof IQ PanOptix (TFNT00)", manufacturer: "Alcon", type: "Trifocal (Diffractive)", material: "Hydrophobic Acrylic (AcrySof)", addPower: "+2.17D intermediate / +3.25D near", bestFor: "Distance (∞), intermediate (60cm), near (40cm). ENLIGHTEN optical technology.", toric: true, toricModel: "PanOptix Toric (TFNTx0)", haptic: "C-loop (STABLEFORCE)", opticDia: "6.0mm", injector: "AutonoMe / Monarch III" },
    { name: "Clareon PanOptix (CNWTT0)", manufacturer: "Alcon", type: "Trifocal (Diffractive)", material: "Hydrophobic Acrylic (Clareon)", addPower: "+2.17D intermediate / +3.25D near", bestFor: "Latest-gen trifocal, Clareon material, ultra-low PCO + glistening-free", toric: true, toricModel: "Clareon PanOptix Toric (CNWTTx)", haptic: "C-loop (STABLEFORCE)", opticDia: "6.0mm", injector: "AutonoMe" },
    // J&J VISION
    { name: "TECNIS Synergy (DFR00V)", manufacturer: "J&J Vision", type: "Continuous Range", material: "Hydrophobic Acrylic (TECNIS)", addPower: "+2.0D to +3.5D continuous", bestFor: "Continuous vision distance through near, combines EDOF + diffractive multifocal", toric: true, toricModel: "TECNIS Synergy Toric (DFW)", haptic: "Tri-Fix modified C-loop", opticDia: "6.0mm", injector: "iTec" },
    { name: "TECNIS Multifocal (ZLB00)", manufacturer: "J&J Vision", type: "Diffractive Bifocal", material: "Hydrophobic Acrylic", addPower: "+3.25D near (at IOL plane)", bestFor: "Strong near add, proven bifocal, good for avid readers", toric: true, toricModel: "TECNIS Multifocal Toric", haptic: "C-loop", opticDia: "6.0mm", injector: "Unfolder Platinum" },
    { name: "TECNIS Multifocal (ZKB00)", manufacturer: "J&J Vision", type: "Diffractive Bifocal", material: "Hydrophobic Acrylic", addPower: "+2.75D near (at IOL plane)", bestFor: "Lower add bifocal, better intermediate than +3.25D model", toric: true, toricModel: "TECNIS Multifocal Toric", haptic: "C-loop", opticDia: "6.0mm", injector: "Unfolder Platinum" },
    // BVI (PHYSIOL)
    { name: "FineVision POD F", manufacturer: "BVI", type: "Trifocal (Diffractive)", material: "Hydrophilic Acrylic + Hydrophobic surface (25%/75%)", addPower: "+1.75D intermediate / +3.50D near", bestFor: "Strong near, pupil-dependent light distribution, apodized", toric: true, toricModel: "FineVision POD FT", haptic: "Double C-loop", opticDia: "6.0mm", injector: "Accuject 2" },
    { name: "FineVision HP (Triumf)", manufacturer: "BVI", type: "Trifocal (Diffractive)", material: "Glistening-free hydrophobic acrylic", addPower: "+1.75D intermediate / +3.50D near", bestFor: "Hydrophobic glistening-free trifocal, enhanced contrast", toric: true, toricModel: "FineVision HP Toric", haptic: "Double C-loop", opticDia: "6.0mm", injector: "Accuject 2" },
    // CARL ZEISS
    { name: "AT LISA tri 839MP", manufacturer: "Carl Zeiss", type: "Trifocal (Diffractive)", material: "Hydrophilic Acrylic + Hydrophobic surface", addPower: "+1.66D intermediate / +3.33D near", bestFor: "Balanced trifocal, plate haptic for rotational stability, SMP micro-structure", toric: true, toricModel: "AT LISA tri toric 939MP", haptic: "Plate haptic (4-point fixation)", opticDia: "6.0mm", injector: "BLUEMIXS 180" },
    // RAYNER
    { name: "RayOne Trifocal (RAO830C)", manufacturer: "Rayner", type: "Trifocal (Diffractive)", material: "Hydrophilic Acrylic (26%)", addPower: "+1.75D intermediate / +3.50D near", bestFor: "Fully preloaded trifocal, non-apodized design, good near performance", toric: true, toricModel: "RayOne Trifocal Toric", haptic: "Modified C-loop", opticDia: "6.0mm", injector: "RayOne preloaded" },
    // HOYA
    { name: "Vivinex iSert Trifocal (XY1-TP)", manufacturer: "HOYA", type: "Trifocal (Diffractive)", material: "Hydrophobic Acrylic (Vivinex)", addPower: "+1.75D intermediate / +3.50D near", bestFor: "Glistening-free Vivinex platform trifocal, preloaded", toric: true, toricModel: "Vivinex Trifocal Toric", haptic: "Modified C-loop", opticDia: "6.0mm", injector: "iSert preloaded" },
    // BVI (LENTIS)
    { name: "LENTIS Mplus (LS-313 MF30)", manufacturer: "BVI", type: "Rotationally Asymmetric Bifocal", material: "Hydrophilic + Hydrophobic surface", addPower: "+3.00D sector near addition", bestFor: "Unique sector design, no concentric rings, reduced halos, good near", toric: true, toricModel: "LENTIS Mplus Toric (LS-313 MF30T)", haptic: "C-loop", opticDia: "6.0mm", injector: "Accuject 2" },
  ]
};

const ALL_LENSES_FLAT = (() => {
  const arr = [
    ...IOL_DATABASE.monofocal.standard,
    ...IOL_DATABASE.monofocal.enhanced,
    ...IOL_DATABASE.edof,
    ...IOL_DATABASE.multifocal,
  ];
  const seen = new Set();
  return arr.filter(l => { if (seen.has(l.name)) return false; seen.add(l.name); return true; });
})();

// ===========================
// COMORBIDITY / CONTRAINDICATION DATA
// ===========================
const COMORBIDITY_FLAGS = {
  absolute_contraindications_multifocal: [
    "Advanced glaucoma (significant VF loss / split fixation)",
    "Macular pathology with central involvement (wet/dry AMD with subfoveal changes, DME, CME, full-thickness macular hole)",
    "Epiretinal membrane with metamorphopsia (positive Amsler)",
    "Corneal ectasia (keratoconus, pellucid marginal degeneration, post-LASIK ectasia)",
    "Irregular astigmatism (topographic irregularity index above threshold)",
    "Amblyopia in the fellow eye",
    "Optic neuropathy (any cause — glaucomatous, ischemic, compressive, inflammatory)",
    "Active or recurrent anterior/intermediate/posterior uveitis",
    "Significant zonular instability / dialysis (>3 clock hours)",
    "Advanced pseudoexfoliation with phacodonesis",
    "Unrealistic patient expectations (unable to accept any visual compromise)",
    "Cognitive impairment affecting neuroadaptation",
  ],
  relative_contraindications_multifocal: [
    "Mild epiretinal membrane (no distortion on Amsler grid)",
    "Early/stable dry AMD (no geographic atrophy or CNV risk)",
    "Fuchs' endothelial dystrophy (mild, ECC >1000 cells/mm²)",
    "Moderate ocular surface disease (DED/MGD — treatable before surgery)",
    "Previous myopic LASIK/PRK — with appropriate formula adjustment",
    "Previous hyperopic LASIK/PRK — higher unpredictability",
    "Pupil abnormalities (large scotopic pupil >5mm, irregular pupil shape)",
    "Significant angle kappa/alpha (>0.4mm measured displacement)",
    "Monocular patient (only one functional eye)",
    "Professional night drivers (pilots, truck drivers, taxi/rideshare)",
    "Patients requiring critical scotopic visual performance",
    "Mild-to-moderate pseudoexfoliation (stable, no phacodonesis)",
    "Diabetes WITHOUT macular involvement (monitor closely)",
    "Previous vitrectomy (may affect IOL position prediction)",
    "High myopia (AL >26mm) — aberration concerns with multifocal rings",
  ],
  absolute_contraindications_toric: [
    "Irregular astigmatism on topography/tomography",
    "Corneal ectasia (keratoconus, PMD, post-LASIK ectasia)",
    "Unstable refraction / progressive corneal pathology",
    "Significant zonular instability (high risk of IOL rotation >10°)",
    "Uncontrolled corneal scarring in the visual axis affecting regularity",
  ],
  caution_flags: [
    "Diabetes without macular involvement — proceed with caution; optimize HbA1c pre-op; risk of postop DME/CME",
    "Previous RK — most unpredictable; diurnal K fluctuation; progressive hyperopic shift; avoid multifocal",
    "Dry eye / MGD — optimize ocular surface BEFORE biometry AND surgery; affects K readings and outcomes",
    "Pseudoexfoliation — consider CTR insertion; may affect ELP prediction; monitor for late IOL decentration",
    "High myopia (AL >26mm) — use appropriate formulas; check for staphyloma; retinal risk; Wang-Koch adjustment",
    "Posterior capsule plaque — may need earlier YAG capsulotomy; counsel accordingly about timeline",
    "Small pupil (<4mm undilated) — may limit light-splitting IOL performance; consider iris hooks/Malyugin ring",
    "Dense/white/mature cataract — biometry may be less reliable (especially AL by ultrasound); use optical biometry if possible",
    "Only-eye / monocular — conservative approach; monofocal or enhanced monofocal safest; avoid bilateral simultaneous surgery",
    "History of RD repair / vitrectomy — altered anterior chamber dynamics; formula adjustment may be needed",
  ]
};

// ===========================
// FORMULA GUIDE DATA
// ===========================
const FORMULA_GUIDE = {
  short: {
    range: "< 22.0 mm", label: "Short Eyes", icon: "📏",
    primary: ["Barrett Universal II", "Kane", "Hill-RBF 3.0", "Hoffer QST"],
    secondary: ["Hoffer Q", "Holladay 2 (with LT & WTW)"],
    notes: "Short eyes are at highest risk for refractive surprise (hyperopic shift with older formulas). Use multiple formulas and consider averaging top 2-3. Barrett and Kane consistently outperform older formulas. Always input lens thickness and WTW when available. Consider targeting -0.25D to -0.50D for safety margin.",
    pitfalls: ["SRK/T tends to overestimate IOL power in short eyes → hyperopic surprise", "Haigis can underperform in very short eyes (<21mm)", "A-constant optimization is critical in this range"],
  },
  normal: {
    range: "22.0 – 24.5 mm", label: "Normal Eyes", icon: "✅",
    primary: ["Barrett Universal II", "Kane", "Hill-RBF 3.0", "EVO 2.0"],
    secondary: ["SRK/T", "Holladay 1", "Hoffer Q", "Haigis"],
    notes: "Most formulas perform well in normal range. New-generation AI-based formulas (Kane, Hill-RBF, EVO) show slight advantages in large datasets. This is the 'comfort zone' — use any modern formula with confidence. Still input all available biometric parameters for best results.",
    pitfalls: ["Even in normal range, outliers exist — always verify with 2+ formulas", "Don't rely solely on SRK/T if more modern formulas are available"],
  },
  medium_long: {
    range: "24.5 – 26.0 mm", label: "Medium-Long Eyes", icon: "📐",
    primary: ["Barrett Universal II", "Kane", "Hill-RBF 3.0"],
    secondary: ["SRK/T", "Holladay 1", "EVO 2.0"],
    notes: "Begin watching for myopic surprise with older formulas. Barrett and Kane maintain excellent accuracy. SRK/T still reasonable but may begin to show bias. Start considering if Wang-Koch adjustment is appropriate near upper boundary.",
    pitfalls: ["Older formulas begin to show myopic bias", "Verify biometry — long AL can be artefact of staphyloma"],
  },
  long: {
    range: "> 26.0 mm", label: "Long / High Myopia", icon: "🔭",
    primary: ["Barrett Universal II", "Kane", "Hill-RBF 3.0"],
    secondary: ["Holladay 2 (with AL adjustment)", "Wang-Koch AL modification", "EVO 2.0"],
    notes: "High risk of hyperopic surprise with older formulas (SRK/T, Haigis). Always consider Wang-Koch AL adjustment if using older formulas. AI-based formulas have shown superior outcomes in long eyes. Use optimized lens constants. Check for posterior staphyloma (B-scan). If AL >28mm, consider contacting formula developers for guidance.",
    pitfalls: ["SRK/T notoriously overestimates IOL power in long eyes", "Posterior staphyloma can cause inaccurate AL measurement", "Immersion A-scan may differ from optical biometry in these eyes", "Consider negative-power IOLs for extremely long eyes (>30mm)"],
  },
  post_lasik_myopic: {
    range: "Post-Myopic LASIK/PRK", label: "Post-Myopic Refractive Surgery", icon: "🔵",
    primary: ["Barrett True-K (no history)", "Shammas-PL", "Haigis-L"],
    secondary: ["ASCRS Online Calculator", "Masket Formula", "Modified Masket", "Potvin-Hill Pentacam method"],
    notes: "Corneal K readings are falsely flat after myopic LASIK/PRK → IOL power underestimated → hyperopic surprise. Use formulas that don't require historical data when unavailable. Barrett True-K performs well even without historical data. Always use at least 3 methods and compare. If historical data available (pre-LASIK K readings, amount of laser correction), use it in clinical history methods.",
    pitfalls: ["Standard K readings are WRONG — do not use SRK/T with standard K", "Effective lens position is miscalculated by standard formulas", "Total corneal refractive power (TCRP) from Pentacam may be more accurate than SimK", "Consider targeting slight myopia (-0.25 to -0.50D) as safety margin"],
  },
  post_lasik_hyperopic: {
    range: "Post-Hyperopic LASIK/PRK", label: "Post-Hyperopic Refractive Surgery", icon: "🔴",
    primary: ["Barrett True-K", "Shammas-PL"],
    secondary: ["ASCRS Online Calculator", "Haigis-L"],
    notes: "K readings are falsely steep → IOL power overestimated → myopic surprise. Even more challenging than post-myopic LASIK. Fewer studies and less data available for formula optimization. Consider targeting slight myopia as these cases are highly unpredictable.",
    pitfalls: ["Even fewer validated formulas than post-myopic LASIK", "Consider piggyback IOL strategy if initial result is unsatisfactory", "Document the uncertainty with the patient thoroughly"],
  },
  post_rk: {
    range: "Post-Radial Keratotomy", label: "Post-RK", icon: "⚠",
    primary: ["Barrett True-K", "ASCRS Post-Refractive Calculator"],
    secondary: ["Shammas-PL", "Haigis-L with adjusted K", "Masket"],
    notes: "Most unpredictable group in IOL calculations. Progressive hyperopic shift, significant diurnal K fluctuation (can change 1-2D through the day), multi-zone cornea with central flattening. Perform biometry in the MORNING when cornea is steepest. Multiple K readings on different days recommended. Generally AVOID multifocal IOLs (high HOAs). Consider piggyback IOL strategy for residual refractive error.",
    pitfalls: ["Diurnal fluctuation: always measure in AM", "Progressive hyperopic shift may continue after cataract surgery", "Corneal topography shows irregular multi-zone pattern", "High HOAs make diffractive lenses perform poorly", "Counsel extensively about unpredictability — consent documentation critical"],
  },
  post_keratoconus: {
    range: "Keratoconus / Corneal Ectasia", label: "Keratoconus", icon: "🔺",
    primary: ["Barrett Universal II (with cautious K entry)", "Kane", "SRK/T (historical preference)"],
    secondary: ["Holladay 2", "Haigis (for extreme K values)"],
    notes: "Use the flattest K reading or average K from tomography. Avoid steep meridian K if very irregular. Multifocal IOLs are CONTRAINDICATED — use monofocal only. Consider toric IOL if astigmatism is regular (rare in advanced KC). RGP or scleral lens may still be needed post-cataract surgery. In advanced KC, consider combined procedure (cataract + PKP/DALK) or staged approach.",
    pitfalls: ["K readings highly variable depending on measurement device and axis", "SimK vs TrueK vs Total Corneal Power may differ significantly", "Standard formulas assume a normal posterior cornea — this assumption is violated in KC", "Toric IOL only if topographic astigmatism has a regular pattern", "Patients may still need contact lenses post-operatively — counsel accordingly"],
  },
  post_vitrectomy: {
    range: "Post-Vitrectomy / Silicone Oil", label: "Post-Vitrectomy", icon: "🔬",
    primary: ["Barrett Universal II", "Kane", "SRK/T"],
    secondary: ["Haigis", "Holladay 2"],
    notes: "Vitrectomy alters effective lens position prediction. If silicone oil is present, optical biometry may be unreliable (reflective interface). Gas tamponade will resolve — wait until gas has fully absorbed before biometry. Long-term, aphakic vitrectomized eyes may have different anterior chamber dynamics. Generally use standard formulas but verify with 2+ methods.",
    pitfalls: ["Silicone oil causes falsely short AL with optical biometry", "Use immersion ultrasound if SO present, or calculate post-SO removal", "Gas bubble prevents accurate optical biometry — wait for resolution", "Prior buckle/band may alter AL measurement"],
  }
};

// ===========================
// SCREENING CHECKLIST
// ===========================
const SCREENING_CHECKLIST = [
  {
    category: "Biometry",
    icon: "📐",
    items: [
      { name: "Axial Length (AL)", target: "IOLMaster 700/500, Lenstar, ARGOS", critical: true, notes: "Repeat if SNR is low or inconsistent. Check for staphyloma in high myopes (B-scan). Immersion US if optical fails." },
      { name: "Keratometry (K1/K2/Km)", target: "Sim-K, True Net Power, TCA", critical: true, notes: "Compare biometer K to topography K. Flag if difference >0.50D. Use total corneal astigmatism for toric planning." },
      { name: "Anterior Chamber Depth (ACD)", target: "Corneal epithelium to anterior lens surface", critical: true, notes: "Critical for ELP prediction. Shallow ACD (<2.5mm) flagged for angle closure risk and formula adjustment." },
      { name: "Lens Thickness (LT)", target: "Required for newer-generation formulas", critical: true, notes: "Barrett, Kane, Hill-RBF, EVO all benefit from LT input. Thicker lenses may indicate intumescent cataract." },
      { name: "White-to-White (WTW/CD)", target: "Horizontal corneal diameter", critical: false, notes: "Useful for Holladay 2. Typical range 11.0-12.5mm. Small WTW may suggest microphthalmos." },
      { name: "Central Corneal Thickness (CCT)", target: "Pachymetry (optical or ultrasound)", critical: false, notes: "Important post-refractive surgery. Thin cornea may indicate previous ablation. Affects IOP interpretation." },
      { name: "Posterior Corneal Curvature", target: "Pentacam / Galilei / CASIA2", critical: false, notes: "Measured by Scheimpflug or AS-OCT. Used in total corneal astigmatism calculation. ~15% of WTR astig becomes ATR when posterior is included." },
    ]
  },
  {
    category: "Corneal Assessment",
    icon: "🔬",
    items: [
      { name: "Topography / Tomography", target: "Pentacam, Orbscan, Placido-based, CASIA2", critical: true, notes: "Rule out ectasia, irregular astigmatism, forme fruste keratoconus. Compare anterior and posterior elevation maps." },
      { name: "Posterior Corneal Astigmatism", target: "Pentacam TCA / TNP", critical: true, notes: "Crucial for toric IOL planning. WTR anterior astigmatism may become ATR when posterior cornea is considered. Use Baylor nomogram or Barrett toric calculator." },
      { name: "Higher-Order Aberrations (HOAs)", target: "Wavefront analysis — Coma, Trefoil, Spherical Aberration", critical: false, notes: "High HOAs (especially coma and trefoil) = poor multifocal/EDOF candidates. Z(4,0) spherical aberration affects aspheric IOL choice." },
      { name: "Endothelial Cell Count (ECC)", target: "Specular microscopy", critical: true, notes: "Essential if Fuchs' suspected. >2000 cells/mm² = normal. 1000-1500 = caution. <1000 = consider combined Fuchs procedure (DMEK/DSAEK + cataract)." },
      { name: "Angle Kappa / Alpha", target: "Measured on biometer (IOLMaster) or topographer", critical: true, notes: "Large angle kappa (>0.4mm) can decenter the functional optical zone of multifocal IOLs, causing significant dysphotopsia." },
      { name: "Tear Film Assessment Pre-Biometry", target: "Ensure stable tear film BEFORE measuring K", critical: true, notes: "Unstable tear film = unreliable keratometry = wrong IOL power. Treat OSD and repeat biometry if needed." },
    ]
  },
  {
    category: "Retinal Assessment",
    icon: "👁",
    items: [
      { name: "OCT Macula", target: "Rule out ERM, AMD, DME, VMT, MH, CNVM", critical: true, notes: "Any macular pathology affecting central vision = avoid multifocal IOLs. Even subtle ERM can reduce contrast with diffractive IOLs." },
      { name: "Amsler Grid", target: "Subjective metamorphopsia screening", critical: true, notes: "Quick chairside screen. Positive Amsler = investigate with OCT before premium IOL. False negatives possible with dense cataract." },
      { name: "OCT RNFL / ONH (GCC)", target: "Glaucoma assessment", critical: true, notes: "Moderate-to-advanced glaucoma = avoid multifocal (reduced contrast sensitivity intolerable). Consider EDOF or enhanced monofocal." },
      { name: "Visual Field (if indicated)", target: "Humphrey 24-2 or 10-2", critical: false, notes: "If glaucoma suspected. Significant VF loss = absolute contraindication for multifocal. Split fixation = monofocal only." },
      { name: "Dilated Fundus Examination", target: "BIO/slit lamp + 90D/78D lens", critical: true, notes: "Check for PVD, lattice degeneration, peripheral holes/tears (especially high myopes). Treat any pathology before cataract surgery." },
      { name: "Potential Acuity (PAM/Interferometry)", target: "Predict retinal function behind dense cataract", critical: false, notes: "Useful when cataract is dense and fundus view is limited. Helps set realistic expectations for visual outcome." },
    ]
  },
  {
    category: "Ocular Surface",
    icon: "💧",
    items: [
      { name: "Tear Break-Up Time (TBUT)", target: "≥ 10 seconds normal", critical: true, notes: "Low TBUT (<5s) affects keratometry reliability AND postop comfort. Optimize BEFORE biometry. Non-invasive BUT (NIBUT) preferred." },
      { name: "Schirmer's Test", target: "≥ 10mm in 5 min (without anesthesia)", critical: false, notes: "Differentiates aqueous-deficient vs evaporative dry eye. Important for treatment planning." },
      { name: "Meibomian Gland Assessment", target: "Expression quality, infrared meibography, LipiView", critical: true, notes: "MGD is the #1 cause of dry eye in cataract patients. Consider IPL/LipiFlow/warm compresses pre-op. You know this well!" },
      { name: "Fluorescein Staining (OXFORD/NEI)", target: "Corneal and conjunctival surface integrity", critical: true, notes: "Grade with Oxford or NEI scale. Significant SPK → unreliable biometry. Treat before proceeding." },
      { name: "Lid Margin & Blepharitis Assessment", target: "Anterior blepharitis, collarettes, Demodex signs", critical: false, notes: "Treat lid disease before surgery. Reduces endophthalmitis risk and improves ocular surface for biometry." },
      { name: "OSDI / SPEED Questionnaire", target: "Standardized dry eye symptoms score", critical: false, notes: "Document baseline symptoms. Helps track improvement and set expectations for postop comfort." },
    ]
  },
  {
    category: "Pupil & Functional",
    icon: "🔵",
    items: [
      { name: "Scotopic Pupil Size", target: "Infrared pupillometry or Colvard", critical: true, notes: "Large scotopic pupil (>5mm) increases dysphotopsia risk with multifocal IOLs. Document in dim illumination." },
      { name: "RAPD Assessment", target: "Swinging flashlight test", critical: true, notes: "Positive RAPD may indicate optic nerve or extensive retinal disease. Investigate cause before any premium IOL." },
      { name: "Contrast Sensitivity", target: "Pelli-Robson or CSV-1000", critical: false, notes: "Baseline measurement useful for postop comparison with premium IOLs. Documents pre-existing contrast loss." },
      { name: "Glare / BAT Testing", target: "Brightness Acuity Tester", critical: false, notes: "Identifies patients sensitive to glare. High glare sensitivity = counsel carefully about multifocal dysphotopsia." },
      { name: "Dominant Eye Determination", target: "Hole-in-card or Miles test", critical: true, notes: "Critical for monovision planning and mix-and-match strategies. Distance correction in dominant eye." },
      { name: "Trial of Monovision (if applicable)", target: "Contact lens trial before surgery", critical: false, notes: "If monovision or blended strategy planned, trial with CLs first. ~80% of patients can adapt." },
    ]
  }
];

// ===========================
// RESOURCE LINKS
// ===========================
const RESOURCE_LINKS = [
  {
    category: "IOL Calculation Tools",
    icon: "🧮",
    links: [
      { name: "Barrett Universal II Calculator", url: "https://calc.apacrs.org/barrett_universal2105/", desc: "Gold-standard modern formula — works across all AL ranges" },
      { name: "Hill-RBF Calculator 3.0", url: "https://rbfcalculator.com/online/index.html", desc: "AI/neural network-based formula with out-of-bounds detection" },
      { name: "Kane Formula", url: "https://www.iolformula.com/", desc: "AI-optimized formula using multiple biometric inputs" },
      { name: "EVO Formula 2.0", url: "https://www.evoiolcalculator.com/", desc: "Emmetropia Verifying Optical formula — cloud-based AI" },
      { name: "ASCRS IOL Calculator (Post-Refractive)", url: "https://iolcalc.ascrs.org/", desc: "Essential for post-LASIK/PRK/RK eyes — multiple methods compared" },
      { name: "Barrett Toric Calculator", url: "https://calc.apacrs.org/toric_calculator20/default.aspx", desc: "Toric IOL planning accounting for posterior corneal astigmatism" },
      { name: "IOL Con (Optimized Constants)", url: "https://iolcon.org/", desc: "Optimized A-constants and lens constants for all major IOLs" },
    ]
  },
  {
    category: "Clinical References",
    icon: "📖",
    links: [
      { name: "ESCRS IOL Calculator", url: "https://www.escrs.org/iol-calculator/", desc: "European Society calculator with multiple formula comparison" },
      { name: "LADAS Super Formula", url: "https://www.iolcalc.com/", desc: "AI-enhanced Super Formula combining multiple formulas" },
      { name: "IOL Match App", url: "https://iolmatch.com/", desc: "Free app for defocus curve comparison and patient lifestyle matching" },
      { name: "myIOL (ESCRS)", url: "https://myiol.escrs.org/", desc: "ESCRS IOL registration and outcomes database" },
    ]
  },
  {
    category: "Professional Education",
    icon: "🎓",
    links: [
      { name: "AAO EyeWiki — IOL Implants", url: "https://eyewiki.aao.org/Intraocular_Lens", desc: "Comprehensive wiki on IOL types, formulas, and complications" },
      { name: "CRSToday — IOL Section", url: "https://crstoday.com/category/iol-lens/", desc: "Latest clinical articles on IOL technology and selection" },
      { name: "JCRS — IOL Research", url: "https://jcrsjournal.org/", desc: "Journal of Cataract & Refractive Surgery — peer-reviewed research" },
      { name: "Review of Ophthalmology — Cataract", url: "https://www.reviewofophthalmology.com/", desc: "Clinical insights and surgical technique articles" },
    ]
  },
  {
    category: "Toric IOL Planning",
    icon: "🔄",
    links: [
      { name: "Barrett Toric Calculator", url: "https://calc.apacrs.org/toric_calculator20/default.aspx", desc: "Accounts for posterior corneal astigmatism — recommended over manufacturer calculators" },
      { name: "Baylor Nomogram (Online)", url: "https://www.bcm.edu/healthcare/specialties/ophthalmology", desc: "Posterior corneal astigmatism adjustment nomogram" },
      { name: "Alcon Toric Calculator (AcrySof/Clareon)", url: "https://www.myalcon-toriccalc.com/", desc: "Manufacturer calculator for Alcon toric IOLs" },
      { name: "J&J TECNIS Toric Calculator", url: "https://www.tecnisiol.com/toric-calculator", desc: "Manufacturer calculator for TECNIS toric IOLs" },
    ]
  }
];

// ===========================
// SPECIAL CASES DATA
// ===========================
const SPECIAL_CASES = [
  {
    id: "short_eyes",
    title: "Short Eyes (AL < 22mm)",
    icon: "📏",
    risk: "high",
    overview: "Short eyes are the highest-risk group for refractive surprise after cataract surgery, typically resulting in a hyperopic outcome (patient ends up more farsighted than intended). This happens because older formulas struggle to accurately predict the effective lens position in small, crowded anterior segments.",
    keyPoints: [
      "Hyperopic surprise is the most common error — patient sees worse at distance than expected",
      "The shorter the eye, the greater the impact of even small measurement errors",
      "A 0.1mm error in AL = ~0.28D error in refraction (vs ~0.09D in a normal eye)",
      "Anterior chamber is typically shallow — affects ELP prediction significantly",
      "Use newer-generation formulas: Barrett Universal II, Kane, Hill-RBF 3.0, Hoffer QST",
      "Input ALL available biometric data (LT, WTW, ACD) — they matter more in short eyes",
      "Consider targeting -0.25D to -0.50D as a safety margin against hyperopic surprise",
      "Verify with multiple formulas and average the best-performing ones",
    ],
    formulaAdvice: "Barrett Universal II and Kane formula have consistently shown the best results in short eyes. Hill-RBF 3.0 includes an 'out-of-bounds' detector that flags unusual eyes. Avoid SRK/T in eyes shorter than 22mm — it systematically underestimates IOL power.",
  },
  {
    id: "long_eyes",
    title: "Long / Highly Myopic Eyes (AL > 26mm)",
    icon: "🔭",
    risk: "high",
    overview: "Long eyes present the opposite challenge — a myopic surprise (patient ends up more nearsighted than intended). Older formulas overestimate the IOL power needed. Additional concerns include retinal pathology (lattice degeneration, posterior staphyloma), and the higher prevalence of macular issues in high myopes.",
    keyPoints: [
      "Myopic surprise is the classic error — newer formulas have largely corrected this",
      "Check for posterior staphyloma with B-scan ultrasonography — can falsify AL readings",
      "If using older formulas (SRK/T), apply Wang-Koch axial length adjustment",
      "AI-based formulas (Kane, Hill-RBF) perform significantly better than traditional formulas",
      "Consider retinal status carefully — high myopes have higher AMD, lattice, and RD risk",
      "Peripheral fundus exam is mandatory before surgery (rule out breaks/tears)",
      "Very long eyes (>30mm) may need negative-power or very low-power IOLs",
      "Capsular bag size is larger → potential for more IOL decentration",
    ],
    formulaAdvice: "Barrett Universal II with optimized constants remains the most reliable. Kane formula has shown excellent results in validation studies. If AL >28mm, consider contacting Hill-RBF team for guidance. Wang-Koch adjustment essential if using SRK/T or older formulas.",
  },
  {
    id: "keratoconus",
    title: "Keratoconus & Corneal Ectasia",
    icon: "🔺",
    risk: "high",
    overview: "Cataract surgery in keratoconus eyes is uniquely challenging due to irregular corneal astigmatism, unreliable keratometry readings, and the likelihood of continued contact lens dependence post-operatively. The key principle is: manage expectations aggressively.",
    keyPoints: [
      "Multifocal IOLs are ABSOLUTELY CONTRAINDICATED — high HOAs destroy diffractive optics performance",
      "Standard monofocal IOL is the safest and most predictable choice",
      "Toric IOL only if the corneal astigmatism has a regular, bowtie pattern on topography (rare in advanced KC)",
      "K readings are unreliable — consider using the flattest K or average of multiple devices",
      "Patients may still need RGP/scleral contact lenses over the IOL for best corrected VA",
      "Intacs/CXL status should be documented — affects corneal measurements",
      "In advanced KC, consider combined cataract + PKP/DALK or staged approach",
      "Consent must clearly document that glasses or contact lenses will likely still be needed",
    ],
    formulaAdvice: "No single formula is validated specifically for keratoconus. Barrett Universal II with cautious K entry is reasonable. Some surgeons prefer SRK/T for historical reasons. Use multiple formulas and consider targeting slight myopia (-0.50D to -1.00D) to keep the patient in their familiar myopic range. Document formula rationale.",
  },
  {
    id: "fuchs",
    title: "Fuchs' Endothelial Dystrophy",
    icon: "💎",
    risk: "moderate",
    overview: "Fuchs' dystrophy adds a layer of complexity because: (1) corneal edema affects keratometry accuracy, (2) endothelial cell loss from surgery may worsen the dystrophy, and (3) some patients may need combined cataract + corneal transplant (triple procedure). The decision tree depends on the severity of the dystrophy.",
    keyPoints: [
      "Check endothelial cell count (ECC) with specular microscopy — this drives the decision",
      "ECC >1500 cells/mm²: generally safe for cataract surgery alone; monitor post-op closely",
      "ECC 1000-1500 cells/mm²: borderline — extended counseling; may need DMEK later",
      "ECC <1000 cells/mm²: strongly consider combined cataract + DMEK/DSAEK (triple procedure)",
      "Corneal pachymetry: thickened cornea (>640µm central) may indicate decompensation risk",
      "Guttae density affects visual quality — even with good VA, patient may have glare/haze complaints",
      "Avoid multifocal IOLs if significant guttae — reduced contrast sensitivity",
      "EDOF or enhanced monofocal can be considered if ECC is adequate and guttae are mild",
      "If triple procedure planned, IOL calculation is more challenging — K values will change post-DMEK",
    ],
    formulaAdvice: "Standard formulas work if the cornea is not significantly edematous at the time of biometry. If corneal edema is present, K readings will be steep and unreliable. For triple procedures, some surgeons target -0.75D to -1.00D myopia anticipating corneal flattening after DMEK. Haigis formula may handle post-DMEK eyes better due to separate anterior chamber depth optimization.",
  },
  {
    id: "post_refractive",
    title: "Post-Refractive Surgery (LASIK/PRK/RK/SMILE)",
    icon: "🔵",
    risk: "high",
    overview: "Previous corneal refractive surgery fundamentally changes the relationship between anterior corneal curvature and total corneal power. Standard formulas make assumptions about this relationship that are violated post-refractive surgery, leading to systematic refractive surprises.",
    keyPoints: [
      "Post-myopic LASIK/PRK: K readings falsely flat → IOL power underestimated → HYPEROPIC surprise",
      "Post-hyperopic LASIK/PRK: K readings falsely steep → IOL power overestimated → MYOPIC surprise",
      "Post-RK: most unpredictable — diurnal K fluctuation, progressive hyperopic shift, multi-zone cornea",
      "Post-SMILE: similar to post-myopic LASIK but less data available",
      "Historical data (pre-refractive K values, amount of correction) improves accuracy significantly",
      "Use specialized formulas: Barrett True-K, Shammas-PL, Haigis-L, ASCRS online calculator",
      "ALWAYS use at least 3 different calculation methods and compare results",
      "Generally avoid multifocal IOLs (especially post-RK) due to increased HOAs",
      "Target slight myopia (-0.25D to -0.50D) as a safety margin in all post-refractive eyes",
      "Piggyback IOL (sulcus-placed secondary IOL) is a viable salvage option for refractive surprises",
    ],
    formulaAdvice: "Barrett True-K (available on APACRS calculator) is the go-to formula — works well even without historical data. ASCRS Post-Refractive Calculator compares multiple methods side by side. For post-RK: perform biometry in the MORNING (cornea is steepest early in the day due to overnight swelling resolution), take multiple K readings on different days, and expect the unexpected.",
  },
  {
    id: "pediatric",
    title: "Pediatric Cataract / Young Patients",
    icon: "👶",
    risk: "special",
    overview: "IOL implantation in children presents unique challenges due to ongoing eye growth, inflammatory response, and the need for amblyopia management. The approach varies significantly by age.",
    keyPoints: [
      "Age <1 year: primary IOL implantation is controversial — many surgeons prefer aphakia + contact lens",
      "Age 1-2 years: IOL implantation increasingly accepted but with significant undercorrection for myopic shift",
      "Age >2 years: primary IOL implantation is standard of care in most centers",
      "Myopic shift must be anticipated — younger = more growth = more shift",
      "Under-correct the IOL power intentionally: target hyperopia based on age-specific nomograms",
      "SRK/T or Holladay 1 typically used (limited data for newer formulas in pediatric eyes)",
      "Intense postoperative inflammation — aggressive steroid regimen required",
      "Posterior capsule opacification rate is nearly 100% — primary posterior capsulorrhexis with anterior vitrectomy often performed",
      "Amblyopia management (patching, atropine penalization) is critical for visual development",
      "Long-term follow-up is mandatory — these lenses need to last 60-80+ years",
    ],
    formulaAdvice: "Use SRK/T or Holladay 1 for most pediatric cases. Undercorrection targets vary by age: age 1 = target +6.00D to +8.00D hyperopia; age 2 = +4.00D to +5.00D; age 3-4 = +2.00D to +3.00D; age 5-8 = +1.00D to +2.00D; age >8 = near emmetropia. These are approximate — refer to Dahan, Infant Aphakia Treatment Study (IATS), and local institutional protocols.",
  },
];

// ===========================
// STYLES & CSS VARIABLES
// ===========================
const cssVars = {
  '--bg-deep': '#0a0e17',
  '--bg-surface': '#111827',
  '--bg-card': '#1a2236',
  '--bg-card-hover': '#1f2a42',
  '--border-subtle': 'rgba(148,163,198,0.12)',
  '--border-active': 'rgba(99,179,237,0.4)',
  '--text-primary': '#e8edf5',
  '--text-secondary': '#8b97b0',
  '--text-muted': '#5a6478',
  '--accent-blue': '#63b3ed',
  '--accent-cyan': '#4fd1c5',
  '--accent-amber': '#f6ad55',
  '--accent-rose': '#fc8181',
  '--accent-green': '#68d391',
  '--accent-purple': '#b794f4',
  '--gradient-primary': 'linear-gradient(135deg, #63b3ed 0%, #4fd1c5 100%)',
  '--gradient-warm': 'linear-gradient(135deg, #f6ad55 0%, #fc8181 100%)',
  '--gradient-cool': 'linear-gradient(135deg, #b794f4 0%, #63b3ed 100%)',
  '--radius-sm': '8px',
  '--radius-md': '14px',
  '--radius-lg': '20px',
  '--radius-xl': '28px',
  '--shadow-card': '0 4px 24px rgba(0,0,0,0.3)',
  '--shadow-elevated': '0 12px 48px rgba(0,0,0,0.4)',
  '--font-display': "'Fraunces', serif",
  '--font-body': "'DM Sans', sans-serif",
};

// ===========================
// REUSABLE COMPONENTS
// ===========================
function GlowOrb({ color, size, top, left, opacity = 0.15 }) {
  return <div style={{ position:'absolute', top, left, width:size, height:size, background:color, borderRadius:'50%', filter:`blur(${parseInt(size)/2}px)`, opacity, pointerEvents:'none', zIndex:0 }} />;
}

function Badge({ children, variant='default', small=false }) {
  const c = { default:{ bg:'rgba(99,179,237,0.15)', color:'var(--accent-blue)', border:'rgba(99,179,237,0.25)' }, success:{ bg:'rgba(104,211,145,0.15)', color:'var(--accent-green)', border:'rgba(104,211,145,0.25)' }, warning:{ bg:'rgba(246,173,85,0.15)', color:'var(--accent-amber)', border:'rgba(246,173,85,0.25)' }, danger:{ bg:'rgba(252,129,129,0.15)', color:'var(--accent-rose)', border:'rgba(252,129,129,0.25)' }, purple:{ bg:'rgba(183,148,244,0.15)', color:'var(--accent-purple)', border:'rgba(183,148,244,0.25)' }, cyan:{ bg:'rgba(79,209,197,0.15)', color:'var(--accent-cyan)', border:'rgba(79,209,197,0.25)' } }[variant] || { bg:'rgba(99,179,237,0.15)', color:'var(--accent-blue)', border:'rgba(99,179,237,0.25)' };
  return <span style={{ display:'inline-flex', alignItems:'center', padding:small?'2px 8px':'4px 12px', background:c.bg, color:c.color, border:`1px solid ${c.border}`, borderRadius:'100px', fontSize:small?'11px':'12px', fontWeight:600, fontFamily:'var(--font-body)', letterSpacing:'0.02em' }}>{children}</span>;
}

function Card({ children, style={}, onClick, hover=false }) {
  const [h, setH] = useState(false);
  return <div onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{ background:h&&hover?'var(--bg-card-hover)':'var(--bg-card)', border:`1px solid ${h&&hover?'var(--border-active)':'var(--border-subtle)'}`, borderRadius:'var(--radius-md)', padding:'24px', transition:'all 0.3s', cursor:onClick?'pointer':'default', boxShadow:h&&hover?'var(--shadow-elevated)':'var(--shadow-card)', ...style }}>{children}</div>;
}

function SectionTitle({ icon, title, subtitle }) {
  return <div style={{ marginBottom:'28px' }}><div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'8px' }}><span style={{ fontSize:'28px' }}>{icon}</span><h2 style={{ fontFamily:'var(--font-display)', fontSize:'26px', fontWeight:700, color:'var(--text-primary)', margin:0 }}>{title}</h2></div>{subtitle&&<p style={{ fontFamily:'var(--font-body)', fontSize:'15px', color:'var(--text-secondary)', margin:0, paddingLeft:'42px' }}>{subtitle}</p>}</div>;
}

function TabBar({ tabs, active, onChange }) {
  return <div style={{ display:'flex', gap:'4px', background:'rgba(17,24,39,0.8)', borderRadius:'var(--radius-md)', padding:'4px', border:'1px solid var(--border-subtle)', overflowX:'auto', flexWrap:'nowrap' }}>{tabs.map(t=><button key={t.id} onClick={()=>onChange(t.id)} style={{ fontFamily:'var(--font-body)', fontSize:'13px', fontWeight:600, padding:'10px 16px', border:'none', borderRadius:'10px', background:active===t.id?'var(--bg-card)':'transparent', color:active===t.id?'var(--text-primary)':'var(--text-muted)', cursor:'pointer', transition:'all 0.2s', whiteSpace:'nowrap', boxShadow:active===t.id?'0 2px 8px rgba(0,0,0,0.3)':'none' }}>{t.icon} {t.label}</button>)}</div>;
}

function OptionButton({ label, flag, onClick }) {
  const [hovered, setHovered] = useState(false);
  const fc = { absolute:{bg:'rgba(252,129,129,0.08)',border:'rgba(252,129,129,0.3)',dot:'var(--accent-rose)'}, relative:{bg:'rgba(246,173,85,0.08)',border:'rgba(246,173,85,0.3)',dot:'var(--accent-amber)'}, caution:{bg:'rgba(246,173,85,0.05)',border:'rgba(246,173,85,0.2)',dot:'var(--accent-amber)'}, clear:{bg:'rgba(104,211,145,0.05)',border:'rgba(104,211,145,0.2)',dot:'var(--accent-green)'}, toric:{bg:'rgba(183,148,244,0.08)',border:'rgba(183,148,244,0.3)',dot:'var(--accent-purple)'}, toric_maybe:{bg:'rgba(183,148,244,0.05)',border:'rgba(183,148,244,0.2)',dot:'var(--accent-purple)'} }[flag] || {bg:'rgba(104,211,145,0.05)',border:'rgba(104,211,145,0.2)',dot:'var(--accent-green)'};
  return <button onClick={onClick} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} style={{ display:'flex', alignItems:'center', gap:'12px', padding:'14px 18px', border:`1px solid ${hovered?fc.border:'var(--border-subtle)'}`, borderRadius:'var(--radius-sm)', background:hovered?fc.bg:'transparent', cursor:'pointer', transition:'all 0.2s', textAlign:'left' }}><div style={{ width:'10px', height:'10px', borderRadius:'50%', background:fc.dot, flexShrink:0 }} /><span style={{ fontFamily:'var(--font-body)', fontSize:'14px', color:'var(--text-primary)' }}>{label}</span></button>;
}

function PatientOption({ label, onClick }) {
  const [h, setH] = useState(false);
  return <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{ display:'flex', alignItems:'center', gap:'12px', padding:'16px 18px', border:`1px solid ${h?'var(--border-active)':'var(--border-subtle)'}`, borderRadius:'var(--radius-sm)', background:h?'rgba(99,179,237,0.06)':'transparent', cursor:'pointer', transition:'all 0.2s', textAlign:'left' }}><div style={{ width:'10px', height:'10px', borderRadius:'50%', border:'2px solid var(--accent-blue)', flexShrink:0 }} /><span style={{ fontFamily:'var(--font-body)', fontSize:'15px', color:'var(--text-primary)' }}>{label}</span></button>;
}

// ===========================
// SVG ILLUSTRATIONS FOR PATIENTS
// ===========================
function IOLDiagram({ type }) {
  const w = 320, h = 200;
  const common = { eye: '#1a2236', sclera: '#e8edf5', cornea: '#63b3ed', iris: '#5a6478', pupil: '#111', retina: '#f6ad55' };

  const renderRays = (focusPoints) => focusPoints.map((fp, i) => (
    <g key={i}>
      <line x1={80} y1={60+i*20} x2={fp.x} y2={fp.y} stroke={fp.color} strokeWidth="1.5" opacity="0.7" strokeDasharray={fp.dash||'none'} />
      <circle cx={fp.x} cy={fp.y} r="3" fill={fp.color} opacity="0.9" />
    </g>
  ));

  const configs = {
    monofocal: {
      title: "Monofocal IOL",
      sub: "Single focus point — distance",
      rays: [{ x:260, y:100, color:'#68d391' }, { x:260, y:100, color:'#68d391' }, { x:260, y:100, color:'#68d391' }],
      labels: [{ x:260, y:85, text:"Distance ✓", color:'#68d391' }],
      note: "All light focuses at one point → sharp distance"
    },
    enhanced: {
      title: "Enhanced Monofocal",
      sub: "Extended single focus — distance + some intermediate",
      rays: [{ x:250, y:98, color:'#68d391' }, { x:260, y:100, color:'#68d391' }, { x:240, y:102, color:'#4fd1c5', dash:'4,3' }],
      labels: [{ x:258, y:85, text:"Distance ✓", color:'#68d391' }, { x:232, y:120, text:"Intermediate ~", color:'#4fd1c5' }],
      note: "Gently stretches focus → improved intermediate"
    },
    edof: {
      title: "EDOF IOL",
      sub: "Elongated focus — distance through intermediate",
      rays: [{ x:240, y:95, color:'#63b3ed' }, { x:250, y:100, color:'#68d391' }, { x:260, y:105, color:'#68d391' }],
      labels: [{ x:260, y:85, text:"Distance ✓", color:'#68d391' }, { x:230, y:85, text:"Intermediate ✓", color:'#63b3ed' }],
      note: "Elongated focal zone → continuous range"
    },
    multifocal: {
      title: "Multifocal / Trifocal IOL",
      sub: "Multiple focus points — near, intermediate, distance",
      rays: [{ x:210, y:90, color:'#b794f4' }, { x:240, y:100, color:'#63b3ed' }, { x:265, y:100, color:'#68d391' }],
      labels: [{ x:265, y:85, text:"Far ✓", color:'#68d391' }, { x:238, y:85, text:"Mid ✓", color:'#63b3ed' }, { x:202, y:80, text:"Near ✓", color:'#b794f4' }],
      note: "Light split into 2-3 points → all distances"
    },
    toric: {
      title: "Toric IOL",
      sub: "Corrects astigmatism — available in all types",
      rays: [{ x:260, y:92, color:'#fc8181', dash:'4,3' }, { x:260, y:100, color:'#68d391' }, { x:260, y:108, color:'#fc8181', dash:'4,3' }],
      labels: [{ x:260, y:78, text:"Without toric ✗", color:'#fc8181' }, { x:260, y:125, text:"With toric ✓", color:'#68d391' }],
      note: "Cylinder correction aligns split light rays"
    }
  };
  const cfg = configs[type] || configs.monofocal;

  return (
    <div style={{ marginBottom: '16px' }}>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" style={{ maxWidth: '400px', display: 'block', margin: '0 auto' }}>
        {/* Eye outline */}
        <ellipse cx={170} cy={100} rx={120} ry={65} fill="none" stroke="rgba(99,179,237,0.15)" strokeWidth="1" />
        {/* Cornea */}
        <path d={`M 60 55 Q 40 100 60 145`} fill="none" stroke={common.cornea} strokeWidth="2.5" opacity="0.6" />
        {/* Lens (IOL) */}
        <ellipse cx={110} cy={100} rx={12} ry={30} fill="rgba(99,179,237,0.1)" stroke="var(--accent-blue)" strokeWidth="1.5" />
        <text x={110} y={145} textAnchor="middle" fill="var(--accent-blue)" fontSize="9" fontFamily="var(--font-body)" fontWeight="600">IOL</text>
        {/* Retina */}
        <path d={`M 275 55 Q 295 100 275 145`} fill="none" stroke={common.retina} strokeWidth="2" opacity="0.5" />
        <text x={285} y={155} textAnchor="middle" fill={common.retina} fontSize="8" fontFamily="var(--font-body)" opacity="0.6">Retina</text>
        {/* Light rays */}
        {renderRays(cfg.rays)}
        {/* Labels */}
        {cfg.labels.map((lb, i) => <text key={i} x={lb.x} y={lb.y} textAnchor="middle" fill={lb.color} fontSize="10" fontFamily="var(--font-body)" fontWeight="600">{lb.text}</text>)}
        {/* Incoming light */}
        <line x1={10} y1={80} x2={55} y2={90} stroke="rgba(255,255,255,0.3)" strokeWidth="1" markerEnd="" />
        <line x1={10} y1={100} x2={55} y2={100} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1={10} y1={120} x2={55} y2={110} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <text x={10} y={70} fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="var(--font-body)">Light →</text>
      </svg>
      <div style={{ textAlign:'center', marginTop:'8px' }}>
        <div style={{ fontFamily:'var(--font-display)', fontSize:'15px', fontWeight:700, color:'var(--text-primary)' }}>{cfg.title}</div>
        <div style={{ fontFamily:'var(--font-body)', fontSize:'12px', color:'var(--text-muted)', marginTop:'2px' }}>{cfg.note}</div>
      </div>
    </div>
  );
}

function DysphotopsiaDiagram() {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))', gap:'16px', marginBottom:'16px' }}>
      {/* Normal Vision */}
      <div style={{ textAlign:'center' }}>
        <svg viewBox="0 0 160 120" width="100%" style={{ maxWidth:'180px' }}>
          <rect width="160" height="120" rx="8" fill="#111827" />
          <circle cx="80" cy="50" r="18" fill="#f6ad55" opacity="0.9" />
          <circle cx="80" cy="50" r="5" fill="#fff" opacity="0.6" />
          <text x="80" y="95" textAnchor="middle" fill="#68d391" fontSize="11" fontFamily="var(--font-body)" fontWeight="600">Normal Vision</text>
          <text x="80" y="110" textAnchor="middle" fill="var(--text-muted)" fontSize="8" fontFamily="var(--font-body)">Clean light, no artifacts</text>
        </svg>
      </div>
      {/* Halos */}
      <div style={{ textAlign:'center' }}>
        <svg viewBox="0 0 160 120" width="100%" style={{ maxWidth:'180px' }}>
          <rect width="160" height="120" rx="8" fill="#111827" />
          <circle cx="80" cy="50" r="35" fill="rgba(246,173,85,0.1)" />
          <circle cx="80" cy="50" r="28" fill="rgba(246,173,85,0.15)" />
          <circle cx="80" cy="50" r="22" fill="rgba(246,173,85,0.2)" />
          <circle cx="80" cy="50" r="18" fill="#f6ad55" opacity="0.9" />
          <circle cx="80" cy="50" r="5" fill="#fff" opacity="0.6" />
          <text x="80" y="95" textAnchor="middle" fill="#f6ad55" fontSize="11" fontFamily="var(--font-body)" fontWeight="600">Halos</text>
          <text x="80" y="110" textAnchor="middle" fill="var(--text-muted)" fontSize="8" fontFamily="var(--font-body)">Rings around lights</text>
        </svg>
      </div>
      {/* Glare / Starburst */}
      <div style={{ textAlign:'center' }}>
        <svg viewBox="0 0 160 120" width="100%" style={{ maxWidth:'180px' }}>
          <rect width="160" height="120" rx="8" fill="#111827" />
          {[0,30,60,90,120,150].map(a => <line key={a} x1={80+Math.cos(a*Math.PI/180)*16} y1={50+Math.sin(a*Math.PI/180)*16} x2={80+Math.cos(a*Math.PI/180)*38} y2={50+Math.sin(a*Math.PI/180)*38} stroke="rgba(252,129,129,0.35)" strokeWidth="2" />)}
          {[15,45,75,105,135,165].map(a => <line key={a} x1={80+Math.cos(a*Math.PI/180)*18} y1={50+Math.sin(a*Math.PI/180)*18} x2={80+Math.cos(a*Math.PI/180)*28} y2={50+Math.sin(a*Math.PI/180)*28} stroke="rgba(252,129,129,0.2)" strokeWidth="1.5" />)}
          <circle cx="80" cy="50" r="15" fill="#fc8181" opacity="0.8" />
          <circle cx="80" cy="50" r="5" fill="#fff" opacity="0.5" />
          <text x="80" y="95" textAnchor="middle" fill="#fc8181" fontSize="11" fontFamily="var(--font-body)" fontWeight="600">Glare / Starburst</text>
          <text x="80" y="110" textAnchor="middle" fill="var(--text-muted)" fontSize="8" fontFamily="var(--font-body)">Rays radiating from lights</text>
        </svg>
      </div>
    </div>
  );
}

// ===========================
// LANDING PAGE
// ===========================
function LandingPage({ onSelect }) {
  const [hp, setHp] = useState(null);
  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden', padding:'40px 24px' }}>
      <GlowOrb color="#63b3ed" size="400px" top="-100px" left="-100px" opacity={0.08} />
      <GlowOrb color="#4fd1c5" size="350px" top="60%" left="70%" opacity={0.06} />
      <GlowOrb color="#b794f4" size="300px" top="30%" left="50%" opacity={0.05} />
      <div style={{ textAlign:'center', position:'relative', zIndex:1, maxWidth:'800px', width:'100%' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', marginBottom:'24px' }}>
          <div style={{ width:'48px', height:'48px', borderRadius:'14px', background:'var(--gradient-primary)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px' }}>👁</div>
          <span style={{ fontFamily:'var(--font-display)', fontSize:'20px', fontWeight:700, color:'var(--text-primary)' }}>IOL Navigator</span>
        </div>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(28px,5vw,56px)', fontWeight:800, lineHeight:1.1, margin:'0 0 20px', padding:'0 8px', background:'linear-gradient(135deg,#e8edf5 0%,#63b3ed 50%,#4fd1c5 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Intraocular Lens<br/>Decision Platform</h1>
        <p className="landing-desc" style={{ fontFamily:'var(--font-body)', color:'var(--text-secondary)', maxWidth:'560px', margin:'0 auto 48px', lineHeight:1.6 }}>Evidence-based IOL selection algorithms, pre-operative screening tools, and patient education — all in one comprehensive platform.</p>
        <div className="landing-grid">
          {[
            { id:'ecp', icon:'🩺', title:'Eye Care Professional', desc:'Clinical algorithms, decision trees, screening checklists, formula selectors, IOL database, special cases, and resource links.', badge:'Clinical Portal' },
            { id:'patient', icon:'👤', title:'Patient Portal', desc:'Understand your IOL options with visual diagrams, take a lifestyle assessment, explore surgery timeline, and prepare questions for your surgeon.', badge:'Patient Education' },
          ].map(p=>(
            <div key={p.id} onClick={()=>onSelect(p.id)} onMouseEnter={()=>setHp(p.id)} onMouseLeave={()=>setHp(null)} style={{
              background:hp===p.id?'var(--bg-card-hover)':'var(--bg-card)', border:`1px solid ${hp===p.id?'var(--border-active)':'var(--border-subtle)'}`, borderRadius:'var(--radius-lg)', padding:'28px 24px', cursor:'pointer', transition:'all 0.35s', transform:hp===p.id?'translateY(-4px)':'none', boxShadow:hp===p.id?'var(--shadow-elevated)':'var(--shadow-card)', textAlign:'left',
            }}>
              <div style={{ fontSize:'40px', marginBottom:'16px' }}>{p.icon}</div>
              <Badge variant={p.id==='ecp'?'default':'warning'} small>{p.badge}</Badge>
              <h3 style={{ fontFamily:'var(--font-display)', fontSize:'22px', fontWeight:700, color:'var(--text-primary)', margin:'12px 0 8px' }}>{p.title}</h3>
              <p style={{ fontFamily:'var(--font-body)', fontSize:'14px', color:'var(--text-secondary)', margin:0, lineHeight:1.6 }}>{p.desc}</p>
              <div style={{ marginTop:'20px', fontFamily:'var(--font-body)', fontSize:'14px', fontWeight:600, color:'var(--accent-blue)' }}>Enter Portal →</div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'12px', color:'var(--text-muted)', marginTop:'48px', lineHeight:1.5, padding:'0 8px' }}>⚕ This tool is intended for educational and clinical decision-support purposes only. It does not replace professional clinical judgment.</p>
      </div>
    </div>
  );
}

// ===========================
// ECP: IOL DECISION TREE
// ===========================
function ECPDecisionTree() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const questions = [
    { id:'mac', question:'Macular pathology?', detail:'AMD, ERM with metamorphopsia, DME, CME, macular hole, VMT', options:[
      {label:'Yes — Active / Significant',value:'yes_active',flag:'absolute'},
      {label:'Yes — Mild / Stable (no distortion)',value:'yes_mild',flag:'relative'},
      {label:'No macular pathology',value:'no',flag:'clear'},
    ]},
    { id:'glauc', question:'Glaucoma status?', detail:'VF loss severity, RNFL thickness, split fixation', options:[
      {label:'Advanced (significant VF loss / split fixation)',value:'advanced',flag:'absolute'},
      {label:'Moderate (controlled, mild-mod VF loss)',value:'moderate',flag:'relative'},
      {label:'Suspect / Mild / None',value:'mild_none',flag:'clear'},
    ]},
    { id:'cornea', question:'Corneal status?', detail:'Topographic regularity, ectasia, Fuchs, previous surgery', options:[
      {label:'Irregular astigmatism / Ectasia / Significant Fuchs (ECC<1200)',value:'irregular',flag:'absolute'},
      {label:'Previous LASIK/PRK (stable)',value:'post_refractive',flag:'caution'},
      {label:'Previous RK',value:'post_rk',flag:'caution'},
      {label:'Mild Fuchs (ECC>1500) / Regular cornea',value:'regular',flag:'clear'},
    ]},
    { id:'osd', question:'Ocular surface disease?', detail:'Dry eye, MGD, blepharitis, Sjögren', options:[
      {label:'Severe / Untreated',value:'severe',flag:'relative'},
      {label:'Moderate — Needs optimization before biometry',value:'moderate',flag:'caution'},
      {label:'Mild or None',value:'mild_none',flag:'clear'},
    ]},
    { id:'pupil', question:'Pupil & angle kappa assessment?', detail:'Scotopic pupil size and angle kappa/alpha', options:[
      {label:'Large scotopic pupil (>5mm) AND/OR large angle kappa (>0.4mm)',value:'flagged',flag:'relative'},
      {label:'Normal pupil and kappa',value:'normal',flag:'clear'},
    ]},
    { id:'astig', question:'Corneal astigmatism (total corneal)?', detail:'Include posterior corneal contribution', options:[
      {label:'≥ 1.00D — Toric IOL indicated',value:'high',flag:'toric'},
      {label:'0.75D — Borderline (lifestyle dependent)',value:'borderline',flag:'toric_maybe'},
      {label:'< 0.75D — No toric needed',value:'low',flag:'clear'},
    ]},
    { id:'lifestyle', question:"Patient's primary visual priority?", detail:'', options:[
      {label:'Distance primarily (driving, outdoor, sports)',value:'distance'},
      {label:'Intermediate primarily (computer, cooking, dashboard)',value:'intermediate'},
      {label:'Near primarily (reading, crafts, phone)',value:'near'},
      {label:'Full spectacle independence (all distances)',value:'full_range'},
    ]},
    { id:'dysphot', question:'Dysphotopsia tolerance?', detail:'Based on personality, profession, counseling', options:[
      {label:'Low — Cannot accept halos/glare (perfectionist / night driver)',value:'low'},
      {label:'Moderate — Willing to adapt if vision is good',value:'moderate'},
      {label:'High — Spectacle independence is priority',value:'high'},
    ]},
  ];

  const handleAnswer = (qId,value,flag) => {
    const na = {...answers,[qId]:{value,flag}};
    setAnswers(na);
    if(step<questions.length-1) setStep(step+1);
    else generateRec(na);
  };

  const generateRec = (ans) => {
    const hasAbsolute = Object.values(ans).some(a=>a.flag==='absolute');
    const hasRelative = Object.values(ans).some(a=>a.flag==='relative');
    const needsToric = ans.astig?.flag==='toric';
    const toricMaybe = ans.astig?.flag==='toric_maybe';
    const isPostRef = ans.cornea?.value==='post_refractive'||ans.cornea?.value==='post_rk';
    const lifestyle = ans.lifestyle?.value;
    const dys = ans.dysphot?.value;

    let r = {};
    if(hasAbsolute) {
      r = { tier:'monofocal', title:'Standard or Enhanced Monofocal IOL', color:'var(--accent-amber)',
        reason:'Absolute contraindication(s) detected for multifocal/diffractive IOLs.',
        primary:needsToric?'Monofocal Toric (Clareon Toric, AcrySof IQ Toric, TECNIS Toric II, Vivinex Toric, RayOne Toric)':'Standard Monofocal (Clareon, AcrySof IQ SN60WF, TECNIS ZCB00, Vivinex XY1, enVista, RayOne)',
        alternatives:['Enhanced Monofocal (TECNIS Eyhance, RayOne EMV) for modest intermediate improvement','Mini-monovision strategy (target -0.75D to -1.25D in non-dominant eye)','Vivity (non-diffractive EDOF) may be considered in select relative-only cases with counseling'],
        warnings:['Multifocal and diffractive EDOF IOLs are contraindicated','Document shared decision-making if considering any premium option'],
        lenses: ALL_LENSES_FLAT.filter(l=>l.type==='Monofocal'||l.type==='Enhanced Monofocal'),
      };
    } else if(hasRelative && dys==='low') {
      r = { tier:'enhanced_monofocal', title:'Enhanced Monofocal or Non-Diffractive EDOF', color:'var(--accent-cyan)',
        reason:'Relative contraindication(s) with low dysphotopsia tolerance.',
        primary:needsToric?'Clareon Vivity Toric, Vivity Toric, or Eyhance Toric':'Vivity (non-diffractive EDOF), TECNIS Eyhance, or RayOne EMV',
        alternatives:['Monovision with standard monofocal','LENTIS Comfort (sector EDOF) — asymmetric design, fewer halos'],
        warnings:['Diffractive multifocals carry higher dysphotopsia risk','Close counseling on realistic expectations is essential'],
        lenses: ALL_LENSES_FLAT.filter(l=>l.type.includes('Enhanced')||l.type.includes('Non-Diffractive')),
      };
    } else if(hasRelative) {
      r = { tier:'edof', title:'EDOF IOL (with careful counseling)', color:'var(--accent-blue)',
        reason:'Relative contraindications present but moderate-to-high tolerance.',
        primary:needsToric?'Vivity Toric, Symfony Toric, or LENTIS Comfort Toric':'Vivity, TECNIS Symfony, LENTIS Comfort, or Vivinex IMPRESS',
        alternatives:['TECNIS Synergy if strong near desired (thorough counseling)','Enhanced monofocal as safer fallback'],
        warnings:['Thorough counseling on potential visual disturbances','Consider contact lens simulation if available','Document shared decision-making'],
        lenses: ALL_LENSES_FLAT.filter(l=>l.type.includes('EDOF')||l.type.includes('Continuous')),
      };
    } else if(lifestyle==='full_range' && dys==='high') {
      r = { tier:'multifocal', title:'Trifocal / Full-Range Multifocal IOL', color:'var(--accent-green)',
        reason:'No significant contraindications. Full spectacle independence desired with high tolerance.',
        primary:needsToric?'Clareon PanOptix Toric, TECNIS Synergy Toric, or FineVision HP Toric':'Clareon PanOptix, TECNIS Synergy, FineVision HP, AT LISA tri, RayOne Trifocal, Vivinex Trifocal',
        alternatives:['Mix-and-match: Trifocal + EDOF (dominant/non-dominant)','LENTIS Mplus (sector bifocal — unique design, no concentric rings)'],
        warnings:['Ensure excellent ocular surface before biometry','Counsel on neuroadaptation period (3-6 months)','Night driving halos expected initially'],
        lenses: ALL_LENSES_FLAT.filter(l=>l.type.includes('focal')||l.type.includes('Continuous')||l.type.includes('Trifocal')),
      };
    } else if(lifestyle==='full_range') {
      r = { tier:'edof_plus', title:'EDOF or Continuous-Range IOL', color:'var(--accent-blue)',
        reason:'Full range desired but moderate tolerance — balanced approach.',
        primary:needsToric?'TECNIS Synergy Toric or Clareon Vivity Toric':'TECNIS Synergy, Vivity, or Vivinex IMPRESS',
        alternatives:['Trifocal (PanOptix, FineVision) if near is critical','Blended: EDOF distance eye + Trifocal near eye'],
        warnings:['Synergy provides better near than Vivity but more halos','Mix-and-match strategies can optimize outcomes'],
        lenses: ALL_LENSES_FLAT.filter(l=>l.type.includes('EDOF')||l.type.includes('Continuous')),
      };
    } else if(lifestyle==='distance') {
      r = { tier:'monofocal_distance', title:'Monofocal / Enhanced Monofocal (distance target)', color:'var(--accent-cyan)',
        reason:'Patient prioritizes distance vision.',
        primary:needsToric?'Clareon Toric, TECNIS Toric II, or Vivinex Toric at plano':'Clareon, TECNIS ZCB00, Vivinex XY1, or enVista at plano',
        alternatives:['Eyhance or RayOne EMV for modest intermediate boost','Vivity if patient is open to extended range'],
        warnings:['Reading glasses will be needed','Discuss monovision option for fellow eye'],
        lenses: ALL_LENSES_FLAT.filter(l=>l.type==='Monofocal'||l.type==='Enhanced Monofocal'),
      };
    } else if(lifestyle==='intermediate') {
      r = { tier:'edof_intermediate', title:'EDOF / Enhanced Monofocal', color:'var(--accent-purple)',
        reason:'Patient prioritizes intermediate (computer, cooking, dashboard).',
        primary:needsToric?'Vivity Toric, Symfony Toric, or LENTIS Comfort Toric':'Vivity, TECNIS Symfony, LENTIS Comfort, Vivinex IMPRESS',
        alternatives:['Eyhance with target -0.50D','Micro-monovision with standard monofocal'],
        warnings:['Near reading glasses likely still needed','EDOF provides best intermediate without significant dysphotopsia'],
        lenses: ALL_LENSES_FLAT.filter(l=>l.type.includes('EDOF')||l.type.includes('Enhanced')),
      };
    } else {
      r = { tier:'multifocal_near', title:'Multifocal / Trifocal (near-priority)', color:'var(--accent-green)',
        reason:'Patient prioritizes near vision.',
        primary:needsToric?'PanOptix Toric, Synergy Toric, or FineVision Toric':'Clareon PanOptix, TECNIS Synergy, FineVision HP, LENTIS Mplus',
        alternatives:['Higher-add bifocal (TECNIS MF +4.00D ZMB00)','Blended: Trifocal near eye + EDOF distance eye'],
        warnings:['Counsel that some distance softness possible','Full neuroadaptation 3-6 months'],
        lenses: ALL_LENSES_FLAT.filter(l=>l.type.includes('focal')||l.type.includes('Continuous')||l.type.includes('Trifocal')),
      };
    }
    if(isPostRef) r.warnings=[...(r.warnings||[]),'⚠ POST-REFRACTIVE: Use specialized formulas (Barrett True-K, Shammas-PL, ASCRS calculator)','Standard keratometry is UNRELIABLE — use at least 3 calculation methods','Consider targeting slight myopia (-0.25 to -0.50D) as safety margin'];
    if(toricMaybe) r.warnings=[...(r.warnings||[]),'Borderline astigmatism (0.75D): Consider toric if high visual demands. Factor posterior corneal astigmatism.'];
    setResult(r);
  };

  const reset = ()=>{ setStep(0); setAnswers({}); setResult(null); };

  if(result) return (
    <div>
      <SectionTitle icon="🎯" title="IOL Recommendation" subtitle="Based on clinical decision algorithm" />
      <Card style={{ borderLeft:`4px solid ${result.color}`, marginBottom:'20px' }}>
        <Badge variant={result.tier.includes('monofocal')?'warning':result.tier.includes('multifocal')?'success':'default'}>{result.tier.replace(/_/g,' ').toUpperCase()}</Badge>
        <h3 style={{ fontFamily:'var(--font-display)', fontSize:'22px', color:'var(--text-primary)', margin:'12px 0 8px' }}>{result.title}</h3>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'14px', color:'var(--text-secondary)', margin:'0 0 20px' }}>{result.reason}</p>
        <div style={{ background:'rgba(99,179,237,0.08)', borderRadius:'var(--radius-sm)', padding:'16px', marginBottom:'16px' }}>
          <div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:'var(--accent-blue)', marginBottom:'6px', textTransform:'uppercase', letterSpacing:'0.05em' }}>PRIMARY RECOMMENDATION</div>
          <div style={{ fontFamily:'var(--font-body)', fontSize:'15px', color:'var(--text-primary)', fontWeight:600 }}>{result.primary}</div>
        </div>
        <div style={{ marginBottom:'16px' }}>
          <div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:'var(--accent-cyan)', marginBottom:'8px', textTransform:'uppercase', letterSpacing:'0.05em' }}>ALTERNATIVES</div>
          {result.alternatives.map((a,i)=><div key={i} style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-secondary)', padding:'4px 0 4px 16px', borderLeft:'2px solid var(--border-subtle)' }}>{a}</div>)}
        </div>
        {result.warnings?.length>0 && <div style={{ background:'rgba(246,173,85,0.08)', borderRadius:'var(--radius-sm)', padding:'16px' }}>
          <div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:'var(--accent-amber)', marginBottom:'8px', textTransform:'uppercase' }}>⚠ IMPORTANT CONSIDERATIONS</div>
          {result.warnings.map((w,i)=><div key={i} style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--accent-amber)', padding:'3px 0', opacity:0.9 }}>• {w}</div>)}
        </div>}
      </Card>
      {result.lenses?.length>0 && <Card style={{ marginBottom:'20px' }}>
        <div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:'var(--accent-purple)', marginBottom:'12px', textTransform:'uppercase' }}>COMPATIBLE IOL OPTIONS</div>
        <div style={{ display:'grid', gap:'8px' }}>{result.lenses.slice(0,8).map((l,i)=><div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 14px', background:'rgba(0,0,0,0.2)', borderRadius:'var(--radius-sm)', flexWrap:'wrap', gap:'8px' }}>
          <div><span style={{ fontFamily:'var(--font-body)', fontSize:'14px', color:'var(--text-primary)', fontWeight:600 }}>{l.name}</span><span style={{ fontFamily:'var(--font-body)', fontSize:'12px', color:'var(--text-muted)', marginLeft:'8px' }}>{l.manufacturer}</span></div>
          <div style={{ display:'flex', gap:'6px', flexWrap:'wrap' }}><Badge variant="purple" small>{l.type}</Badge>{l.toric&&<Badge variant="cyan" small>Toric</Badge>}</div>
        </div>)}</div>
      </Card>}
      <button onClick={reset} style={{ fontFamily:'var(--font-body)', fontSize:'14px', fontWeight:600, padding:'12px 24px', border:'1px solid var(--border-subtle)', borderRadius:'var(--radius-sm)', background:'var(--bg-card)', color:'var(--text-secondary)', cursor:'pointer' }}>↺ Restart Decision Tree</button>
    </div>
  );

  const q = questions[step];
  return (
    <div>
      <SectionTitle icon="🌳" title="IOL Decision Tree" subtitle="Step-by-step clinical algorithm for IOL type selection" />
      <div style={{ marginBottom:'20px', display:'flex', gap:'4px' }}>{questions.map((_,i)=><div key={i} style={{ flex:1, height:'4px', borderRadius:'2px', background:i<step?'var(--accent-blue)':i===step?'var(--accent-cyan)':'rgba(255,255,255,0.08)' }} />)}</div>
      <Card>
        <div style={{ fontFamily:'var(--font-body)', fontSize:'12px', color:'var(--text-muted)', marginBottom:'12px' }}>STEP {step+1} OF {questions.length}</div>
        <h3 style={{ fontFamily:'var(--font-display)', fontSize:'20px', color:'var(--text-primary)', margin:'0 0 6px' }}>{q.question}</h3>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-secondary)', margin:'0 0 20px' }}>{q.detail}</p>
        <div style={{ display:'grid', gap:'10px' }}>{q.options.map((o,i)=><OptionButton key={i} label={o.label} flag={o.flag} onClick={()=>handleAnswer(q.id,o.value,o.flag)} />)}</div>
        {step>0&&<button onClick={()=>setStep(step-1)} style={{ marginTop:'16px', fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-muted)', background:'none', border:'none', cursor:'pointer' }}>← Previous</button>}
      </Card>
    </div>
  );
}

// ===========================
// ECP: SCREENING CHECKLIST
// ===========================
function ECPScreeningChecklist() {
  const [checked,setChecked]=useState({});
  const toggle=(c,i)=>{const k=`${c}-${i}`;setChecked(p=>({...p,[k]:!p[k]}));};
  const total=SCREENING_CHECKLIST.reduce((s,c)=>s+c.items.length,0);
  const done=Object.values(checked).filter(Boolean).length;
  const pct=Math.round((done/total)*100);
  return (
    <div>
      <SectionTitle icon="✅" title="Pre-Operative Screening Checklist" subtitle="Comprehensive assessment before IOL selection" />
      <Card style={{ marginBottom:'20px', display:'flex', alignItems:'center', gap:'20px', flexWrap:'wrap' }}>
        <div style={{ position:'relative', width:'64px', height:'64px' }}>
          <svg width="64" height="64" viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" /><circle cx="32" cy="32" r="28" fill="none" stroke="var(--accent-green)" strokeWidth="4" strokeDasharray={`${pct*1.76} 176`} strokeLinecap="round" transform="rotate(-90 32 32)" style={{transition:'stroke-dasharray 0.5s'}} /></svg>
          <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-body)', fontSize:'14px', fontWeight:700, color:'var(--text-primary)' }}>{pct}%</div>
        </div>
        <div><div style={{ fontFamily:'var(--font-body)', fontSize:'16px', fontWeight:600, color:'var(--text-primary)' }}>{done} of {total} completed</div><div style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-secondary)' }}>{pct===100?'✓ All assessments complete':'Complete all critical items before premium IOL selection'}</div></div>
      </Card>
      {SCREENING_CHECKLIST.map((cat,ci)=><Card key={ci} style={{ marginBottom:'16px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'16px' }}><span style={{ fontSize:'22px' }}>{cat.icon}</span><h3 style={{ fontFamily:'var(--font-display)', fontSize:'18px', fontWeight:700, color:'var(--text-primary)', margin:0 }}>{cat.category}</h3></div>
        <div style={{ display:'grid', gap:'6px' }}>{cat.items.map((item,ii)=>{const k=`${ci}-${ii}`;const ic=checked[k];return <div key={ii} onClick={()=>toggle(ci,ii)} style={{ display:'flex', gap:'12px', padding:'12px 14px', background:ic?'rgba(104,211,145,0.06)':'rgba(0,0,0,0.15)', borderRadius:'var(--radius-sm)', cursor:'pointer', border:`1px solid ${ic?'rgba(104,211,145,0.2)':'transparent'}`, transition:'all 0.2s' }}>
          <div style={{ width:'22px', height:'22px', borderRadius:'6px', flexShrink:0, marginTop:'1px', border:ic?'none':'2px solid var(--text-muted)', background:ic?'var(--accent-green)':'transparent', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'14px', color:'#000' }}>{ic?'✓':''}</div>
          <div style={{ flex:1 }}><div style={{ display:'flex', alignItems:'center', gap:'8px', flexWrap:'wrap', marginBottom:'2px' }}><span style={{ fontFamily:'var(--font-body)', fontSize:'14px', fontWeight:600, color:'var(--text-primary)', textDecoration:ic?'line-through':'none', opacity:ic?0.6:1 }}>{item.name}</span>{item.critical&&<Badge variant="danger" small>Critical</Badge>}</div><div style={{ fontFamily:'var(--font-body)', fontSize:'12px', color:'var(--text-muted)' }}>{item.target}</div><div style={{ fontFamily:'var(--font-body)', fontSize:'12px', color:'var(--text-secondary)', marginTop:'4px', fontStyle:'italic' }}>{item.notes}</div></div>
        </div>})}</div>
      </Card>)}
    </div>
  );
}

// ===========================
// ECP: FORMULA SELECTOR
// ===========================
function ECPFormulaSelector() {
  const [sel,setSel]=useState(null);
  return (
    <div>
      <SectionTitle icon="📊" title="IOL Power Formula Selector" subtitle="Optimal formula by axial length and clinical scenario" />
      <div style={{ display:'grid', gap:'12px' }}>{Object.entries(FORMULA_GUIDE).map(([k,d])=><Card key={k} hover onClick={()=>setSel(sel===k?null:k)} style={{ borderLeft:sel===k?'4px solid var(--accent-blue)':'4px solid transparent' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'8px', marginBottom:sel===k?'16px':0 }}>
          <div style={{ display:'flex', alignItems:'center', gap:'10px' }}><span style={{ fontSize:'20px' }}>{d.icon}</span><div><div style={{ fontFamily:'var(--font-display)', fontSize:'17px', fontWeight:700, color:'var(--text-primary)' }}>{d.label}</div><div style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-muted)' }}>{d.range}</div></div></div>
          <Badge variant={k.includes('post')||k==='post_keratoconus'?'warning':'default'}>{k.includes('post')||k==='post_keratoconus'||k==='post_vitrectomy'?'Special Case':'Standard'}</Badge>
        </div>
        {sel===k&&<div style={{ borderTop:'1px solid var(--border-subtle)', paddingTop:'16px' }}>
          <div style={{ marginBottom:'16px' }}><div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:'var(--accent-green)', marginBottom:'8px', textTransform:'uppercase' }}>PRIMARY FORMULAS</div><div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>{d.primary.map((f,i)=><Badge key={i} variant="success">{f}</Badge>)}</div></div>
          <div style={{ marginBottom:'16px' }}><div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:'var(--text-muted)', marginBottom:'8px', textTransform:'uppercase' }}>SECONDARY / VERIFICATION</div><div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>{d.secondary.map((f,i)=><Badge key={i} variant="purple">{f}</Badge>)}</div></div>
          <div style={{ background:'rgba(99,179,237,0.06)', borderRadius:'var(--radius-sm)', padding:'14px', marginBottom:d.pitfalls?'12px':0 }}><div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:'var(--accent-blue)', marginBottom:'6px' }}>📝 CLINICAL NOTES</div><p style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-secondary)', margin:0, lineHeight:1.6 }}>{d.notes}</p></div>
          {d.pitfalls&&<div style={{ background:'rgba(252,129,129,0.06)', borderRadius:'var(--radius-sm)', padding:'14px' }}><div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:'var(--accent-rose)', marginBottom:'6px' }}>⚠ COMMON PITFALLS</div>{d.pitfalls.map((p,i)=><div key={i} style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--accent-rose)', padding:'2px 0', opacity:0.85 }}>• {p}</div>)}</div>}
        </div>}
      </Card>)}</div>
    </div>
  );
}

// ===========================
// ECP: CONTRAINDICATIONS
// ===========================
function ECPContraindicationsMatrix() {
  const secs=[{title:'Absolute Contraindications — Multifocal/Diffractive IOLs',data:COMORBIDITY_FLAGS.absolute_contraindications_multifocal,variant:'danger',icon:'🚫'},{title:'Relative Contraindications — Multifocal/EDOF IOLs',data:COMORBIDITY_FLAGS.relative_contraindications_multifocal,variant:'warning',icon:'⚠'},{title:'Contraindications — Toric IOLs',data:COMORBIDITY_FLAGS.absolute_contraindications_toric,variant:'danger',icon:'🔄'},{title:'Caution Flags (Proceed with Modified Plan)',data:COMORBIDITY_FLAGS.caution_flags,variant:'default',icon:'🔔'}];
  return (
    <div>
      <SectionTitle icon="🛡" title="Contraindications & Exclusion Criteria" subtitle="Comprehensive matrix for IOL type eligibility" />
      {secs.map((s,i)=><Card key={i} style={{ marginBottom:'16px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'16px' }}><span style={{ fontSize:'20px' }}>{s.icon}</span><h3 style={{ fontFamily:'var(--font-display)', fontSize:'16px', fontWeight:700, color:'var(--text-primary)', margin:0 }}>{s.title}</h3></div>
        <div style={{ display:'grid', gap:'6px' }}>{s.data.map((item,ii)=><div key={ii} style={{ padding:'10px 14px', borderRadius:'var(--radius-sm)', background:s.variant==='danger'?'rgba(252,129,129,0.04)':s.variant==='warning'?'rgba(246,173,85,0.04)':'rgba(99,179,237,0.04)', borderLeft:`3px solid ${s.variant==='danger'?'var(--accent-rose)':s.variant==='warning'?'var(--accent-amber)':'var(--accent-blue)'}` }}><span style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-secondary)' }}>{item}</span></div>)}</div>
      </Card>)}
    </div>
  );
}

// ===========================
// ECP: IOL DATABASE
// ===========================
function ECPIOLComparison() {
  const [filter,setFilter]=useState('all');
  const [mfgFilter,setMfgFilter]=useState('all');
  const manufacturers = [...new Set(ALL_LENSES_FLAT.map(l=>l.manufacturer))].sort();

  let filtered = filter==='all'?ALL_LENSES_FLAT:ALL_LENSES_FLAT.filter(l=>{
    if(filter==='monofocal') return l.type==='Monofocal';
    if(filter==='enhanced') return l.type==='Enhanced Monofocal';
    if(filter==='edof') return l.type.includes('EDOF')||l.type==='Non-Diffractive EDOF'||l.type.includes('Continuous')||l.type.includes('Progressive');
    if(filter==='multifocal') return l.type.includes('focal')||l.type.includes('Trifocal');
    if(filter==='toric') return l.toric;
    return true;
  });
  if(mfgFilter!=='all') filtered=filtered.filter(l=>l.manufacturer===mfgFilter);

  return (
    <div>
      <SectionTitle icon="🔍" title="IOL Comparison Database" subtitle={`${ALL_LENSES_FLAT.length} IOLs from ${manufacturers.length} manufacturers`} />
      <Card style={{ marginBottom:'16px', padding:'16px' }}>
        <div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:'var(--text-muted)', marginBottom:'8px', textTransform:'uppercase' }}>Filter by Type</div>
        <div style={{ display:'flex', gap:'6px', flexWrap:'wrap', marginBottom:'12px' }}>
          {[{id:'all',label:'All'},{id:'monofocal',label:'Monofocal'},{id:'enhanced',label:'Enhanced'},{id:'edof',label:'EDOF'},{id:'multifocal',label:'Multifocal/Trifocal'},{id:'toric',label:'Toric Available'}].map(f=><button key={f.id} onClick={()=>setFilter(f.id)} style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, padding:'6px 14px', border:`1px solid ${filter===f.id?'var(--border-active)':'var(--border-subtle)'}`, borderRadius:'100px', background:filter===f.id?'rgba(99,179,237,0.12)':'transparent', color:filter===f.id?'var(--accent-blue)':'var(--text-muted)', cursor:'pointer' }}>{f.label}</button>)}
        </div>
        <div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:'var(--text-muted)', marginBottom:'8px', textTransform:'uppercase' }}>Filter by Manufacturer</div>
        <div style={{ display:'flex', gap:'6px', flexWrap:'wrap' }}>
          <button onClick={()=>setMfgFilter('all')} style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, padding:'6px 14px', border:`1px solid ${mfgFilter==='all'?'var(--border-active)':'var(--border-subtle)'}`, borderRadius:'100px', background:mfgFilter==='all'?'rgba(99,179,237,0.12)':'transparent', color:mfgFilter==='all'?'var(--accent-blue)':'var(--text-muted)', cursor:'pointer' }}>All</button>
          {manufacturers.map(m=><button key={m} onClick={()=>setMfgFilter(m)} style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, padding:'6px 14px', border:`1px solid ${mfgFilter===m?'var(--border-active)':'var(--border-subtle)'}`, borderRadius:'100px', background:mfgFilter===m?'rgba(99,179,237,0.12)':'transparent', color:mfgFilter===m?'var(--accent-blue)':'var(--text-muted)', cursor:'pointer' }}>{m.split(' (')[0].split('/')[0]}</button>)}
        </div>
      </Card>
      <div style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-muted)', marginBottom:'12px' }}>Showing {filtered.length} IOL{filtered.length!==1?'s':''}</div>
      <div style={{ display:'grid', gap:'10px' }}>{filtered.map((l,i)=><Card key={i} style={{ padding:'18px 20px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'12px', flexWrap:'wrap' }}>
          <div style={{ flex:1, minWidth:'200px' }}><div style={{ fontFamily:'var(--font-display)', fontSize:'16px', fontWeight:700, color:'var(--text-primary)', marginBottom:'4px' }}>{l.name}</div><div style={{ fontFamily:'var(--font-body)', fontSize:'12px', color:'var(--text-muted)' }}>{l.manufacturer} · {l.material}</div></div>
          <div style={{ display:'flex', gap:'6px', flexWrap:'wrap' }}><Badge variant={l.type==='Monofocal'?'cyan':l.type.includes('Enhanced')?'default':l.type.includes('EDOF')||l.type.includes('Non-Diffractive')?'purple':'success'} small>{l.type}</Badge>{l.toric&&<Badge variant="purple" small>Toric</Badge>}</div>
        </div>
        <div style={{ marginTop:'10px', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'6px', fontSize:'13px' }}>
          <div><span style={{ color:'var(--text-muted)', fontSize:'11px' }}>ADD: </span><span style={{ color:'var(--text-secondary)' }}>{l.addPower}</span></div>
          <div><span style={{ color:'var(--text-muted)', fontSize:'11px' }}>BEST FOR: </span><span style={{ color:'var(--text-secondary)' }}>{l.bestFor}</span></div>
          {l.haptic&&<div><span style={{ color:'var(--text-muted)', fontSize:'11px' }}>HAPTIC: </span><span style={{ color:'var(--text-secondary)' }}>{l.haptic}</span></div>}
          {l.injector&&<div><span style={{ color:'var(--text-muted)', fontSize:'11px' }}>INJECTOR: </span><span style={{ color:'var(--text-secondary)' }}>{l.injector}</span></div>}
          {l.toricModel&&<div><span style={{ color:'var(--text-muted)', fontSize:'11px' }}>TORIC MODEL: </span><span style={{ color:'var(--accent-purple)', fontSize:'12px' }}>{l.toricModel}</span></div>}
        </div>
      </Card>)}</div>
    </div>
  );
}

// ===========================
// ECP: SPECIAL CASES
// ===========================
function ECPSpecialCases() {
  const [expanded,setExpanded]=useState(null);
  return (
    <div>
      <SectionTitle icon="🧩" title="Special Clinical Cases" subtitle="Detailed guidance for complex scenarios" />
      {SPECIAL_CASES.map((sc,i)=><Card key={i} hover onClick={()=>setExpanded(expanded===i?null:i)} style={{ marginBottom:'12px', borderLeft:`4px solid ${sc.risk==='high'?'var(--accent-rose)':sc.risk==='moderate'?'var(--accent-amber)':'var(--accent-purple)'}` }}>
        <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
          <span style={{ fontSize:'28px' }}>{sc.icon}</span>
          <div style={{ flex:1 }}><div style={{ fontFamily:'var(--font-display)', fontSize:'18px', fontWeight:700, color:'var(--text-primary)' }}>{sc.title}</div></div>
          <Badge variant={sc.risk==='high'?'danger':sc.risk==='moderate'?'warning':'purple'} small>{sc.risk==='high'?'HIGH RISK':sc.risk==='moderate'?'MODERATE':'SPECIAL'}</Badge>
          <span style={{ color:'var(--text-muted)', fontSize:'18px', transition:'transform 0.3s', transform:expanded===i?'rotate(180deg)':'none' }}>▾</span>
        </div>
        {expanded===i&&<div style={{ marginTop:'20px', borderTop:'1px solid var(--border-subtle)', paddingTop:'20px' }}>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'14px', color:'var(--text-secondary)', lineHeight:1.7, margin:'0 0 16px' }}>{sc.overview}</p>
          <div style={{ background:'rgba(0,0,0,0.2)', borderRadius:'var(--radius-sm)', padding:'16px', marginBottom:'16px' }}>
            <div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:'var(--accent-cyan)', marginBottom:'8px', textTransform:'uppercase' }}>KEY CLINICAL POINTS</div>
            {sc.keyPoints.map((p,j)=><div key={j} style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-secondary)', padding:'3px 0' }}>• {p}</div>)}
          </div>
          <div style={{ background:'rgba(99,179,237,0.06)', borderRadius:'var(--radius-sm)', padding:'16px' }}>
            <div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:'var(--accent-blue)', marginBottom:'6px' }}>📊 FORMULA ADVICE</div>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-secondary)', margin:0, lineHeight:1.6 }}>{sc.formulaAdvice}</p>
          </div>
        </div>}
      </Card>)}
    </div>
  );
}

// ===========================
// ECP: RESOURCE LINKS
// ===========================
function ECPResources() {
  return (
    <div>
      <SectionTitle icon="🔗" title="Resource Links & Online Tools" subtitle="Essential calculators, references, and educational resources" />
      {RESOURCE_LINKS.map((cat,ci)=><Card key={ci} style={{ marginBottom:'16px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'16px' }}><span style={{ fontSize:'22px' }}>{cat.icon}</span><h3 style={{ fontFamily:'var(--font-display)', fontSize:'18px', fontWeight:700, color:'var(--text-primary)', margin:0 }}>{cat.category}</h3></div>
        <div style={{ display:'grid', gap:'8px' }}>{cat.links.map((link,li)=><a key={li} href={link.url} target="_blank" rel="noopener noreferrer" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 16px', background:'rgba(0,0,0,0.2)', borderRadius:'var(--radius-sm)', textDecoration:'none', border:'1px solid transparent', transition:'all 0.2s', gap:'12px' }} onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--border-active)';e.currentTarget.style.background='rgba(99,179,237,0.06)';}} onMouseLeave={e=>{e.currentTarget.style.borderColor='transparent';e.currentTarget.style.background='rgba(0,0,0,0.2)';}}>
          <div><div style={{ fontFamily:'var(--font-body)', fontSize:'14px', fontWeight:600, color:'var(--accent-blue)' }}>{link.name}</div><div style={{ fontFamily:'var(--font-body)', fontSize:'12px', color:'var(--text-muted)', marginTop:'2px' }}>{link.desc}</div></div>
          <span style={{ color:'var(--text-muted)', fontSize:'16px', flexShrink:0 }}>↗</span>
        </a>)}</div>
      </Card>)}
    </div>
  );
}

// ===========================
// ECP: QUANTITATIVE IOL ANALYZER
// ===========================
function ECPQuantitativeAnalyzer() {
  const [vals, setVals] = useState({
    scotopicPupil: '', mesopicPupil: '', angleKappa: '',
    totalHOA: '', coma: '', trefoil: '', sphericalAb: '',
    cornealSA: '', totalCornealAstig: '', posteriorAstig: '',
    axialLength: '', acd: '', age: '',
  });
  const [analysis, setAnalysis] = useState(null);
  const set = (k, v) => setVals(prev => ({ ...prev, [k]: v }));

  const InputField = ({ label, unit, field, placeholder, note }) => (
    <div style={{ marginBottom: '12px' }}>
      <label style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>{label}</label>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <input type="number" step="any" value={vals[field]} onChange={e => set(field, e.target.value)} placeholder={placeholder}
          style={{ flex: 1, padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', background: 'rgba(0,0,0,0.3)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '14px', outline: 'none', maxWidth: '160px' }} />
        {unit && <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', minWidth: '30px' }}>{unit}</span>}
      </div>
      {note && <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)', marginTop: '3px', fontStyle: 'italic' }}>{note}</div>}
    </div>
  );

  const analyze = () => {
    const sp = parseFloat(vals.scotopicPupil) || 0;
    const mp = parseFloat(vals.mesopicPupil) || 0;
    const ak = parseFloat(vals.angleKappa) || 0;
    const tHOA = parseFloat(vals.totalHOA) || 0;
    const coma = parseFloat(vals.coma) || 0;
    const trefoil = parseFloat(vals.trefoil) || 0;
    const sa = parseFloat(vals.sphericalAb) || 0;
    const cSA = parseFloat(vals.cornealSA) || 0;
    const tca = parseFloat(vals.totalCornealAstig) || 0;
    const pa = parseFloat(vals.posteriorAstig) || 0;
    const al = parseFloat(vals.axialLength) || 23.5;
    const age = parseFloat(vals.age) || 65;

    let flags = [];
    let contraMF = []; // multifocal contraindications
    let contraEDOF = [];
    let warnings = [];
    let recommendations = [];
    let saMatch = '';

    // === PUPIL ANALYSIS ===
    if (sp > 0) {
      if (sp > 6.0) { flags.push({ param: 'Scotopic Pupil', value: `${sp}mm`, level: 'danger', detail: 'Very large scotopic pupil. High risk of dysphotopsia with diffractive IOLs. Significant halos/glare expected. Strongly favor monofocal or non-diffractive EDOF (Vivity).' }); contraMF.push('Large scotopic pupil (>6.0mm)'); }
      else if (sp > 5.0) { flags.push({ param: 'Scotopic Pupil', value: `${sp}mm`, level: 'warning', detail: 'Moderately large scotopic pupil. Increased dysphotopsia risk with diffractive multifocals. EDOF or non-diffractive designs preferred. Counsel thoroughly if proceeding with trifocal.' }); }
      else if (sp >= 3.5) { flags.push({ param: 'Scotopic Pupil', value: `${sp}mm`, level: 'safe', detail: 'Normal range scotopic pupil. Compatible with all IOL types including diffractive multifocals.' }); }
      else { flags.push({ param: 'Scotopic Pupil', value: `${sp}mm`, level: 'warning', detail: 'Small scotopic pupil (<3.5mm). Diffractive multifocals may underperform — less light reaches the near/intermediate zones. Enhanced monofocal or EDOF may be better options.' }); }
    }
    if (mp > 0) {
      if (mp > 5.0) flags.push({ param: 'Mesopic Pupil', value: `${mp}mm`, level: 'warning', detail: 'Larger mesopic pupil increases low-light dysphotopsia. Important for driving at dusk/dawn.' });
      else flags.push({ param: 'Mesopic Pupil', value: `${mp}mm`, level: 'safe', detail: 'Normal mesopic pupil. No additional concerns.' });
    }

    // === ANGLE KAPPA ===
    if (ak > 0) {
      if (ak > 0.5) { flags.push({ param: 'Angle Kappa', value: `${ak}mm`, level: 'danger', detail: 'Very large angle kappa (>0.50mm). Functional optical zone of multifocal IOL will be significantly decentered relative to the visual axis. High risk of monocular diplopia, glare, reduced contrast. AVOID diffractive multifocals. Consider monofocal, Vivity (larger functional zone), or LENTIS sector-design.' }); contraMF.push('Large angle kappa (>0.50mm)'); }
      else if (ak > 0.4) { flags.push({ param: 'Angle Kappa', value: `${ak}mm`, level: 'warning', detail: 'Borderline-large angle kappa (0.40-0.50mm). Proceed with caution for multifocal IOLs. Trifocals with smaller optical zones are higher risk. Vivity\'s non-diffractive wavefront-shaping technology is more tolerant of kappa displacement. Consider Vivity over PanOptix/Synergy.' }); }
      else if (ak >= 0.2) { flags.push({ param: 'Angle Kappa', value: `${ak}mm`, level: 'safe', detail: 'Normal angle kappa. Compatible with all IOL designs.' }); }
      else { flags.push({ param: 'Angle Kappa', value: `${ak}mm`, level: 'safe', detail: 'Small angle kappa. Excellent centration expected for all IOL types.' }); }
    }

    // === HOA ANALYSIS ===
    if (tHOA > 0) {
      if (tHOA > 0.50) { flags.push({ param: 'Total HOA (RMS)', value: `${tHOA}µm`, level: 'danger', detail: 'Significantly elevated total HOAs (>0.50µm RMS). Diffractive IOLs will compound aberrations, severely reducing contrast sensitivity and visual quality. AVOID multifocal and diffractive EDOF. Monofocal or non-diffractive EDOF (Vivity) only.' }); contraMF.push('High total HOA (>0.50µm)'); contraEDOF.push('Diffractive EDOF'); }
      else if (tHOA > 0.35) { flags.push({ param: 'Total HOA (RMS)', value: `${tHOA}µm`, level: 'warning', detail: 'Moderately elevated HOAs (0.35-0.50µm). Diffractive multifocals carry increased risk of visual quality complaints. EDOF or enhanced monofocal preferred. If multifocal desired, extensive counseling essential.' }); }
      else { flags.push({ param: 'Total HOA (RMS)', value: `${tHOA}µm`, level: 'safe', detail: 'Normal total HOA levels. Compatible with all IOL designs.' }); }
    }
    if (coma > 0) {
      if (coma > 0.30) { flags.push({ param: 'Coma', value: `${coma}µm`, level: 'danger', detail: 'High coma (>0.30µm). Often indicates corneal irregularity, decentered ablation, or early ectasia. Diffractive IOLs will perform poorly. Investigate underlying cause.' }); contraMF.push('High coma (>0.30µm)'); }
      else if (coma > 0.20) { flags.push({ param: 'Coma', value: `${coma}µm`, level: 'warning', detail: 'Mildly elevated coma. May affect multifocal performance. Check topography for asymmetric bowtie or decentered ablation.' }); }
    }
    if (trefoil > 0) {
      if (trefoil > 0.25) { flags.push({ param: 'Trefoil', value: `${trefoil}µm`, level: 'warning', detail: 'Elevated trefoil (>0.25µm). Can cause star-shaped patterns around lights. Check for corneal irregularity. May compound diffractive halos.' }); }
    }
    if (sa !== 0 && vals.sphericalAb !== '') {
      if (Math.abs(sa) > 0.30) { flags.push({ param: 'Ocular Spherical Aberration', value: `${sa > 0 ? '+' : ''}${sa}µm`, level: 'warning', detail: `${sa > 0 ? 'Positive' : 'Negative'} spherical aberration is elevated. Affects depth of focus and contrast. Consider aspheric IOL SA target carefully.` }); }
    }

    // === CORNEAL SPHERICAL ABERRATION Z(4,0) — ASPHERIC MATCHING ===
    if (cSA !== 0 && vals.cornealSA !== '') {
      if (cSA >= 0.20 && cSA <= 0.32) {
        saMatch = 'Your corneal SA is in the normal range (+0.20 to +0.32µm). A standard negative-SA IOL (e.g., AcrySof IQ at -0.20µm) will leave a small residual positive SA (+0.00 to +0.12µm), which provides some beneficial depth of focus. This is the most common and well-validated approach.';
        flags.push({ param: 'Corneal SA Z(4,0)', value: `+${cSA}µm`, level: 'safe', detail: saMatch });
        recommendations.push(`Corneal SA +${cSA}µm → AcrySof IQ/Clareon (-0.20µm SA) = residual +${(cSA - 0.20).toFixed(2)}µm. Alternatively, aberration-neutral IOL (TECNIS ZCB00, RayOne) preserves corneal SA profile.`);
      } else if (cSA > 0.32) {
        saMatch = `Higher than average corneal SA (+${cSA}µm). A negative-SA IOL (-0.20µm) will leave residual +${(cSA - 0.20).toFixed(2)}µm. Consider: (1) Full correction with aberration-free + target slight residual, or (2) Accept residual for depth of focus benefit. Avoid over-correcting into negative total SA.`;
        flags.push({ param: 'Corneal SA Z(4,0)', value: `+${cSA}µm`, level: 'warning', detail: saMatch });
      } else if (cSA < 0.20 && cSA > 0) {
        saMatch = `Lower than average corneal SA (+${cSA}µm). A -0.20µm IOL would push total SA negative. Consider aberration-neutral IOL (TECNIS ZCB00, Vivinex XY1, RayOne Aspheric) to avoid inducing negative spherical aberration.`;
        flags.push({ param: 'Corneal SA Z(4,0)', value: `+${cSA}µm`, level: 'warning', detail: saMatch });
        recommendations.push(`Low corneal SA → prefer aberration-neutral IOL to avoid negative total SA.`);
      } else if (cSA <= 0) {
        saMatch = `Negative or zero corneal SA (${cSA}µm). This is atypical — may indicate previous myopic refractive surgery. Do NOT use negative-SA IOLs. Use aberration-neutral IOL only.`;
        flags.push({ param: 'Corneal SA Z(4,0)', value: `${cSA}µm`, level: 'danger', detail: saMatch });
        recommendations.push('Negative corneal SA (likely post-refractive surgery) → aberration-neutral IOL ONLY.');
      }
    }

    // === ASTIGMATISM ANALYSIS ===
    if (tca > 0) {
      if (tca >= 1.0) { recommendations.push(`Total corneal astigmatism ${tca}D — Toric IOL strongly recommended. Use Barrett Toric Calculator with posterior corneal astigmatism input.`); }
      else if (tca >= 0.75) { recommendations.push(`Borderline astigmatism ${tca}D — Consider toric if patient has high visual demands. Factor posterior corneal contribution (typically ~0.30D ATR).`); }
      if (pa > 0) { recommendations.push(`Posterior corneal astigmatism measured at ${pa}D. ${tca > 0 ? `Net effect on total astigmatism: WTR anterior may be partially neutralized. Use total corneal astigmatism (TCA) from Pentacam, not just anterior SimK, for toric planning.` : ''}`); }
    }

    // === AGE FACTOR ===
    if (age > 0) {
      if (age < 50) warnings.push(`Young patient (${age}y). Higher visual expectations, better neuroadaptation capacity, but also longer time with the IOL. Counsel on longevity and potential future interventions.`);
      else if (age > 80) warnings.push(`Older patient (${age}y). Neuroadaptation may be slower (4-12 months vs 3-6 months). Consider less demanding IOL design. Enhanced monofocal or Vivity may be better tolerated than trifocal.`);
    }

    // === IOL SUITABILITY SUMMARY ===
    const hasMFContra = contraMF.length > 0;
    const hasEDOFContra = contraEDOF.length > 0;
    let iolSuitability = [
      { type: 'Trifocal (PanOptix, FineVision, AT LISA tri)', suitable: !hasMFContra && sp <= 5.5 && ak <= 0.4 && tHOA <= 0.35, level: hasMFContra ? 'contra' : (sp > 5.0 || ak > 0.35 || tHOA > 0.30) ? 'caution' : 'good' },
      { type: 'Continuous Range (TECNIS Synergy)', suitable: !hasMFContra && sp <= 5.5 && ak <= 0.45 && tHOA <= 0.40, level: hasMFContra ? 'contra' : (sp > 5.0 || ak > 0.4 || tHOA > 0.35) ? 'caution' : 'good' },
      { type: 'Diffractive EDOF (TECNIS Symfony)', suitable: !hasEDOFContra && tHOA <= 0.45, level: hasEDOFContra ? 'contra' : (sp > 5.5 || tHOA > 0.40) ? 'caution' : 'good' },
      { type: 'Non-Diffractive EDOF (Vivity)', suitable: true, level: (sp > 6.0 || ak > 0.5) ? 'caution' : 'good' },
      { type: 'Enhanced Monofocal (Eyhance, RayOne EMV)', suitable: true, level: 'good' },
      { type: 'Standard Monofocal', suitable: true, level: 'good' },
    ];

    setAnalysis({ flags, contraMF, contraEDOF, warnings, recommendations, iolSuitability });
  };

  const levelColor = { danger: 'var(--accent-rose)', warning: 'var(--accent-amber)', safe: 'var(--accent-green)', contra: 'var(--accent-rose)', caution: 'var(--accent-amber)', good: 'var(--accent-green)' };
  const levelBg = { danger: 'rgba(252,129,129,0.06)', warning: 'rgba(246,173,85,0.06)', safe: 'rgba(104,211,145,0.06)', contra: 'rgba(252,129,129,0.06)', caution: 'rgba(246,173,85,0.06)', good: 'rgba(104,211,145,0.06)' };

  return (
    <div>
      <SectionTitle icon="🔬" title="Quantitative IOL Analyzer" subtitle="Input actual measurements for evidence-based IOL suitability analysis" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '20px' }}>
        <Card>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '12px', textTransform: 'uppercase' }}>🔵 Pupil Measurements</div>
          <InputField label="Scotopic Pupil Size" unit="mm" field="scotopicPupil" placeholder="e.g. 5.2" note="Measured in dim illumination (< 1 lux). Critical threshold: >5.0mm" />
          <InputField label="Mesopic Pupil Size" unit="mm" field="mesopicPupil" placeholder="e.g. 4.0" note="Measured in low light (~3 lux). Relevant for driving conditions" />
        </Card>
        <Card>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, color: 'var(--accent-purple)', marginBottom: '12px', textTransform: 'uppercase' }}>📐 Angle Kappa / Alpha</div>
          <InputField label="Angle Kappa (or Alpha)" unit="mm" field="angleKappa" placeholder="e.g. 0.35" note="Measured on IOLMaster/topographer. Critical threshold: >0.40mm" />
          <InputField label="Patient Age" unit="years" field="age" placeholder="e.g. 68" note="Affects neuroadaptation speed and IOL suitability" />
        </Card>
        <Card>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '12px', textTransform: 'uppercase' }}>🌊 Higher-Order Aberrations</div>
          <InputField label="Total HOA (RMS)" unit="µm" field="totalHOA" placeholder="e.g. 0.28" note="Total root-mean-square HOA. Threshold: >0.35µm = caution, >0.50µm = avoid MF" />
          <InputField label="Coma (Z3,1)" unit="µm" field="coma" placeholder="e.g. 0.15" note="High coma (>0.30µm) = corneal irregularity flag" />
          <InputField label="Trefoil (Z3,3)" unit="µm" field="trefoil" placeholder="e.g. 0.10" note="Elevated trefoil (>0.25µm) = starburst risk" />
          <InputField label="Spherical Aberration (Z4,0)" unit="µm" field="sphericalAb" placeholder="e.g. 0.12" note="Total ocular SA — used for IOL SA matching" />
        </Card>
        <Card>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, color: 'var(--accent-green)', marginBottom: '12px', textTransform: 'uppercase' }}>🔄 Corneal Parameters</div>
          <InputField label="Corneal SA Z(4,0)" unit="µm" field="cornealSA" placeholder="e.g. 0.27" note="From Pentacam/wavefront. Normal: +0.20 to +0.32µm. Used for aspheric IOL matching" />
          <InputField label="Total Corneal Astigmatism" unit="D" field="totalCornealAstig" placeholder="e.g. 1.25" note="From Pentacam TCA — includes posterior corneal contribution" />
          <InputField label="Posterior Corneal Astigmatism" unit="D" field="posteriorAstig" placeholder="e.g. 0.30" note="Typically ~0.30D ATR. Affects toric IOL planning significantly" />
          <InputField label="Axial Length" unit="mm" field="axialLength" placeholder="e.g. 23.5" note="For formula context" />
        </Card>
      </div>
      <button onClick={analyze} style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 700, padding: '14px 32px', border: 'none', borderRadius: 'var(--radius-sm)', background: 'var(--gradient-primary)', color: '#0a0e17', cursor: 'pointer', width: '100%', marginBottom: '24px' }}>
        ⚡ Analyze IOL Suitability
      </button>

      {analysis && <div>
        {/* Parameter Flags */}
        <Card style={{ marginBottom: '16px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '12px', textTransform: 'uppercase' }}>📊 Parameter Analysis</div>
          <div style={{ display: 'grid', gap: '8px' }}>
            {analysis.flags.map((f, i) => (
              <div key={i} style={{ padding: '12px 16px', borderRadius: 'var(--radius-sm)', background: levelBg[f.level], borderLeft: `4px solid ${levelColor[f.level]}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px', flexWrap: 'wrap', gap: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>{f.param}</span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <Badge variant={f.level === 'safe' ? 'success' : f.level === 'danger' ? 'danger' : 'warning'} small>{f.value}</Badge>
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.detail}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* IOL Suitability Matrix */}
        <Card style={{ marginBottom: '16px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, color: 'var(--accent-purple)', marginBottom: '12px', textTransform: 'uppercase' }}>🎯 IOL Type Suitability</div>
          <div style={{ display: 'grid', gap: '6px' }}>
            {analysis.iolSuitability.map((s, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', borderRadius: 'var(--radius-sm)', background: levelBg[s.level], flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500 }}>{s.type}</span>
                <Badge variant={s.level === 'good' ? 'success' : s.level === 'contra' ? 'danger' : 'warning'} small>
                  {s.level === 'good' ? '✓ Suitable' : s.level === 'contra' ? '✗ Contraindicated' : '⚠ Caution'}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Recommendations */}
        {analysis.recommendations.length > 0 && <Card style={{ marginBottom: '16px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '12px', textTransform: 'uppercase' }}>💡 Specific Recommendations</div>
          {analysis.recommendations.map((r, i) => <div key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)', padding: '6px 0', lineHeight: 1.6 }}>• {r}</div>)}
        </Card>}

        {analysis.warnings.length > 0 && <Card style={{ marginBottom: '16px', borderLeft: '4px solid var(--accent-amber)' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, color: 'var(--accent-amber)', marginBottom: '8px', textTransform: 'uppercase' }}>⚠ Additional Considerations</div>
          {analysis.warnings.map((w, i) => <div key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--accent-amber)', padding: '4px 0', opacity: 0.9 }}>• {w}</div>)}
        </Card>}
      </div>}
    </div>
  );
}

// ===========================
// ECP: TORIC IOL PLANNING GUIDE
// ===========================
function ECPToricPlanning() {
  const [expanded, setExpanded] = useState(null);
  const sections = [
    {
      title: 'Posterior Corneal Astigmatism: The Hidden Variable',
      icon: '🔄',
      content: [
        { subtitle: 'Why It Matters', text: 'The posterior cornea contributes approximately 0.30D of against-the-rule (ATR) astigmatism in most patients. Traditional keratometry (SimK) only measures the anterior corneal surface. Ignoring posterior astigmatism leads to systematic errors: over-correction of with-the-rule (WTR) astigmatism and under-correction of ATR astigmatism.' },
        { subtitle: 'The WTR-to-ATR Flip', text: 'A patient with 1.00D of WTR anterior astigmatism may only have ~0.70D of total corneal astigmatism once posterior ATR contribution is factored in. This means a lower-power toric IOL is needed. Conversely, a patient with 1.00D ATR anterior astigmatism may have ~1.30D total — requiring a higher-power toric. This is why Pentacam/Scheimpflug-based total corneal astigmatism (TCA) is superior to SimK for toric planning.' },
        { subtitle: 'Measurement Devices', text: 'Pentacam (Scheimpflug): Provides total corneal refractive power (TCRP) and true net power (TNP). Most widely validated for posterior corneal measurement. Galilei (dual Scheimpflug + Placido): Good correlation with Pentacam. CASIA2 (AS-OCT): High-resolution anterior segment imaging, excellent posterior surface measurement. IOLMaster 700 with TK (total keratometry): Built-in approximation of total corneal astigmatism — very practical for clinical workflow.' },
      ]
    },
    {
      title: 'Calculator Comparison: Barrett vs Manufacturer',
      icon: '📊',
      content: [
        { subtitle: 'Barrett Toric Calculator', text: 'Recommended as the primary calculator. Uses a proprietary algorithm to estimate posterior corneal astigmatism even without direct measurement. Has shown superior outcomes in multiple studies. Available free at calc.apacrs.org. Accepts multiple input methods (K only, TK, or full Pentacam data). Key advantage: independent of manufacturer — can be used with any toric IOL brand.' },
        { subtitle: 'Manufacturer Calculators', text: 'Each manufacturer provides their own toric calculator (Alcon AcrySof/Clareon, J&J TECNIS). These are calibrated specifically for their IOL models and may use different nomograms. They may not always account for posterior corneal astigmatism adequately. Use as secondary verification. Key limitation: may systematically recommend higher toric power (selling more premium product).' },
        { subtitle: 'Best Practice Workflow', text: '1. Measure K with biometer + confirm with Pentacam/tomography. 2. Calculate with Barrett Toric Calculator (primary). 3. Cross-check with manufacturer calculator. 4. If discrepancy >0.50D of cylinder correction, investigate: is there irregular astigmatism? Is the posterior cornea atypical? 5. When in doubt, under-correct rather than over-correct — residual WTR astigmatism is better tolerated than induced ATR.' },
      ]
    },
    {
      title: 'Alignment & Marking Strategies',
      icon: '🎯',
      content: [
        { subtitle: 'Intraoperative Aberrometry', text: 'ORA (Alcon) or HOLOS: Real-time aphakic and pseudophakic refraction in the OR. Can verify toric alignment and suggest adjustments. Most useful in post-refractive surgery eyes and complex cases. Adds cost and time but reduces enhancement rates.' },
        { subtitle: 'Image-Guided Systems', text: 'VERION (Alcon), CALLISTO Eye (Zeiss), TrueGuide (J&J): Pre-operative iris registration linked to intraoperative digital overlay. Eliminates manual marking error. Accounts for cyclorotation between upright and supine positions. Becoming standard of care in premium IOL practices.' },
        { subtitle: 'Manual Marking', text: 'Still widely used globally. Pre-op marking at slit lamp with patient seated upright (avoiding cyclotorsion error). Three-step ink marking or pendular marker. Typical accuracy: ±3-5° (vs ±1-2° for digital systems). Every 1° of misalignment = ~3.3% loss of cylinder correction. At 30° misalignment, there is ZERO correction of the original astigmatism.' },
      ]
    },
    {
      title: 'When NOT to Use a Toric IOL',
      icon: '🚫',
      content: [
        { subtitle: 'Absolute Contraindications', text: 'Irregular astigmatism (topographic irregularity, keratoconus, PMD, post-RK). Corneal ectasia of any type. Unstable or progressive corneal pathology. Significant zonular instability (risk of post-op rotation exceeding 10°).' },
        { subtitle: 'Relative Contraindications', text: 'Low astigmatism (<0.75D total corneal) — the benefit may not justify the additional cost and alignment precision needed. Asymmetric bowtie on topography — may indicate early ectasia or irregular astigmatism component. History of non-stable refraction. Pseudoexfoliation — higher long-term risk of IOL rotation.' },
        { subtitle: 'The 0.75D Decision Point', text: 'At 0.75D of total corneal astigmatism, the decision is nuanced. Factors favoring toric: patient has high visual demands, multifocal IOL is being used (astigmatism degrades multifocal performance more than monofocal), and measurements are consistent and reliable. Factors against: cost-sensitive patient, mild astigmatism that may be well-tolerated, measurements inconsistent between visits.' },
      ]
    },
  ];

  return (
    <div>
      <SectionTitle icon="🔄" title="Toric IOL Planning Guide" subtitle="Comprehensive guide to astigmatism correction with toric IOLs" />
      {sections.map((sec, i) => (
        <Card key={i} hover onClick={() => setExpanded(expanded === i ? null : i)} style={{ marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '24px' }}>{sec.icon}</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)', margin: 0, flex: 1 }}>{sec.title}</h3>
            <span style={{ color: 'var(--text-muted)', transition: 'transform 0.3s', transform: expanded === i ? 'rotate(180deg)' : 'none' }}>▾</span>
          </div>
          {expanded === i && <div style={{ marginTop: '16px', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', display: 'grid', gap: '16px' }}>
            {sec.content.map((c, ci) => (
              <div key={ci}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '6px', textTransform: 'uppercase' }}>{c.subtitle}</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.7 }}>{c.text}</p>
              </div>
            ))}
          </div>}
        </Card>
      ))}
    </div>
  );
}

// ===========================
// ECP: MIX-AND-MATCH ADVISOR
// ===========================
function ECPMixMatch() {
  const [dominant, setDominant] = useState('');
  const [goal, setGoal] = useState('');
  const strategies = [
    { id: 'full_bino', name: 'Bilateral Trifocal', dominantIOL: 'Trifocal (e.g., Clareon PanOptix)', nonDomIOL: 'Same trifocal', target: 'Plano OU', bestFor: 'Maximum spectacle independence at all distances', pros: ['Best binocular near and intermediate', 'Symmetric visual quality', 'Simplified counseling'], cons: ['Highest dysphotopsia risk (both eyes)', 'No fallback if patient intolerant', 'Requires excellent ocular health bilaterally'], dysphotopsia: 'High', nearVA: '★★★★★', interVA: '★★★★', distVA: '★★★★', nightDrive: '★★★' },
    { id: 'tri_edof', name: 'Trifocal + EDOF Mix', dominantIOL: 'EDOF (Vivity or Symfony)', nonDomIOL: 'Trifocal (PanOptix or Synergy)', target: 'Plano dominant / Plano non-dominant', bestFor: 'Good range with reduced dysphotopsia vs bilateral trifocal', pros: ['Better night vision (dominant EDOF eye)', 'Still good near (non-dominant trifocal)', 'Lower dysphotopsia than bilateral trifocal'], cons: ['Some binocular summation loss', 'Near VA slightly less than bilateral trifocal', 'More complex counseling'], dysphotopsia: 'Moderate', nearVA: '★★★★', interVA: '★★★★★', distVA: '★★★★★', nightDrive: '★★★★' },
    { id: 'edof_edof', name: 'Bilateral EDOF', dominantIOL: 'EDOF (Vivity)', nonDomIOL: 'Same EDOF', target: 'Plano OU', bestFor: 'Extended range with minimal dysphotopsia', pros: ['Excellent distance and intermediate', 'Very low halos/glare', 'Great for night drivers'], cons: ['Near reading glasses often still needed', 'Less near than trifocal options'], dysphotopsia: 'Low', nearVA: '★★★', interVA: '★★★★★', distVA: '★★★★★', nightDrive: '★★★★★' },
    { id: 'edof_mono', name: 'EDOF + Micro-Monovision', dominantIOL: 'EDOF at plano (distance)', nonDomIOL: 'EDOF at -0.50 to -0.75D (near boost)', target: 'Plano dominant / -0.50 to -0.75D non-dominant', bestFor: 'Extended range + improved near without multifocal', pros: ['Better near than bilateral EDOF at plano', 'Maintains low dysphotopsia', 'Good depth of focus'], cons: ['Slight stereo reduction', 'May notice blur difference between eyes initially'], dysphotopsia: 'Low', nearVA: '★★★★', interVA: '★★★★★', distVA: '★★★★', nightDrive: '★★★★★' },
    { id: 'mono_mono', name: 'Monofocal Mini-Monovision', dominantIOL: 'Monofocal at plano', nonDomIOL: 'Monofocal at -1.00 to -1.50D', target: 'Plano dominant / -1.00 to -1.50D non-dominant', bestFor: 'Patients who want some near but cannot have premium IOLs', pros: ['Zero dysphotopsia', 'Works with any ocular condition', 'Low cost', 'Tried and true approach'], cons: ['Near eye sacrifices distance clarity', 'Stereo vision reduced', 'Not all patients tolerate monovision'], dysphotopsia: 'None', nearVA: '★★★', interVA: '★★★', distVA: '★★★★★', nightDrive: '★★★★★' },
    { id: 'synergy_vivity', name: 'Synergy + Vivity Mix', dominantIOL: 'Vivity (non-diffractive EDOF)', nonDomIOL: 'TECNIS Synergy (continuous range)', target: 'Plano OU', bestFor: 'Maximize range while keeping dominant eye sharp for distance/night', pros: ['Best of both worlds: distance/night quality + near', 'Vivity dominant = clean distance and night driving', 'Synergy non-dominant = strong near addition'], cons: ['Different optical principles in each eye', 'Cost of two premium IOLs', 'Slight binocular summation mismatch'], dysphotopsia: 'Low-Moderate', nearVA: '★★★★', interVA: '★★★★★', distVA: '★★★★★', nightDrive: '★★★★' },
  ];

  return (
    <div>
      <SectionTitle icon="🔀" title="Mix-and-Match Strategy Advisor" subtitle="Optimize binocular outcomes with complementary IOL combinations" />
      <Card style={{ marginBottom: '20px', background: 'rgba(99,179,237,0.04)', borderLeft: '4px solid var(--accent-blue)' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.7 }}>
          <strong style={{ color: 'var(--text-primary)' }}>Key Principle:</strong> Always determine ocular dominance before planning any mix-and-match or monovision strategy. The dominant eye should be targeted for distance (or the "better distance" IOL). Use the hole-in-card test or Miles test for motor dominance. Consider sensory dominance testing for complex cases. ~80% of patients can adapt to some degree of anisometropia.
        </p>
      </Card>
      <div style={{ display: 'grid', gap: '12px' }}>
        {strategies.map((s, i) => (
          <Card key={i} hover onClick={() => setGoal(goal === s.id ? '' : s.id)} style={{ borderLeft: goal === s.id ? '4px solid var(--accent-cyan)' : '4px solid transparent' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <div><div style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)' }}>{s.name}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>{s.bestFor}</div></div>
              <Badge variant={s.dysphotopsia === 'None' || s.dysphotopsia === 'Low' ? 'success' : s.dysphotopsia === 'High' ? 'warning' : 'default'} small>Dysphotopsia: {s.dysphotopsia}</Badge>
            </div>
            {goal === s.id && <div style={{ marginTop: '16px', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px' }}>
                <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-sm)', padding: '12px' }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, color: 'var(--accent-blue)', textTransform: 'uppercase' }}>Dominant Eye</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-primary)', marginTop: '4px' }}>{s.dominantIOL}</div>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-sm)', padding: '12px' }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, color: 'var(--accent-purple)', textTransform: 'uppercase' }}>Non-Dominant Eye</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-primary)', marginTop: '4px' }}>{s.nonDomIOL}</div>
                </div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-sm)', padding: '12px', marginBottom: '12px' }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, color: 'var(--accent-green)', textTransform: 'uppercase' }}>Refractive Target</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-primary)', marginTop: '4px' }}>{s.target}</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '8px', marginBottom: '16px' }}>
                {[{ label: 'Near', val: s.nearVA }, { label: 'Intermediate', val: s.interVA }, { label: 'Distance', val: s.distVA }, { label: 'Night Driving', val: s.nightDrive }].map((v, vi) => (
                  <div key={vi} style={{ textAlign: 'center', padding: '8px', background: 'rgba(0,0,0,0.15)', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)' }}>{v.label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--accent-amber)', letterSpacing: '-1px' }}>{v.val}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ background: 'rgba(104,211,145,0.06)', borderRadius: 'var(--radius-sm)', padding: '12px' }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, color: 'var(--accent-green)', marginBottom: '6px', textTransform: 'uppercase' }}>Pros</div>
                  {s.pros.map((p, pi) => <div key={pi} style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)', padding: '2px 0' }}>• {p}</div>)}
                </div>
                <div style={{ background: 'rgba(246,173,85,0.06)', borderRadius: 'var(--radius-sm)', padding: '12px' }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, color: 'var(--accent-amber)', marginBottom: '6px', textTransform: 'uppercase' }}>Cons</div>
                  {s.cons.map((c, ci) => <div key={ci} style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)', padding: '2px 0' }}>• {c}</div>)}
                </div>
              </div>
            </div>}
          </Card>
        ))}
      </div>
    </div>
  );
}

// ===========================
// ECP: NEUROADAPTATION RISK SCORE
// ===========================
function ECPNeuroadaptation() {
  const [scores, setScores] = useState({});
  const [result, setResult] = useState(null);
  const set = (k, v) => setScores(prev => ({ ...prev, [k]: v }));

  const factors = [
    { id: 'age', label: 'Patient Age', options: [{ label: '<55 years', value: 1, note: 'Faster neuroadaptation, higher plasticity' }, { label: '55-70 years', value: 2, note: 'Standard adaptation timeline' }, { label: '71-80 years', value: 3, note: 'Slower adaptation, may need 6-12 months' }, { label: '>80 years', value: 4, note: 'Slowest adaptation, consider simpler IOL designs' }] },
    { id: 'personality', label: 'Personality Type', options: [{ label: 'Easy-going / Adaptable', value: 1, note: 'Low-risk; adapts well to visual changes' }, { label: 'Practical / Moderate expectations', value: 2, note: 'Moderate risk; needs clear expectations set' }, { label: 'Perfectionist / Type A', value: 4, note: 'High-risk; may fixate on visual imperfections' }, { label: 'Anxious / Highly detail-oriented', value: 5, note: 'Highest risk; may require extensive follow-up' }] },
    { id: 'hoa', label: 'Pre-existing HOA Level', options: [{ label: 'Low HOA (<0.30µm RMS)', value: 1, note: 'Clean optical system, good baseline' }, { label: 'Moderate HOA (0.30-0.45µm)', value: 2, note: 'Some baseline aberrations; brain already compensating' }, { label: 'High HOA (>0.45µm)', value: 4, note: 'Diffractive IOL will compound existing aberrations' }] },
    { id: 'iol', label: 'IOL Type Being Considered', options: [{ label: 'Monofocal / Enhanced Monofocal', value: 0, note: 'Minimal neuroadaptation needed' }, { label: 'Non-diffractive EDOF (Vivity)', value: 1, note: 'Mild adaptation; mostly contrast adjustment' }, { label: 'Diffractive EDOF (Symfony)', value: 2, note: 'Moderate adaptation for halos; typically 1-3 months' }, { label: 'Trifocal / Continuous Range (PanOptix, Synergy)', value: 3, note: 'Most demanding; full adaptation 3-6 months' }] },
    { id: 'prevSx', label: 'Previous Eye Surgery', options: [{ label: 'No previous surgery', value: 0, note: 'Clean slate' }, { label: 'Previous LASIK/PRK (successful)', value: 1, note: 'Slightly altered optical profile' }, { label: 'Previous RK or complicated surgery', value: 3, note: 'Higher optical irregularity, harder adaptation' }] },
    { id: 'occupation', label: 'Visual Demands', options: [{ label: 'Standard (office, retired, general)', value: 0, note: 'Normal visual demands' }, { label: 'High intermediate (computer-intensive)', value: 1, note: 'Strong intermediate need; EDOF adapts well' }, { label: 'High distance + night (pilot, truck driver)', value: 3, note: 'Any dysphotopsia is professionally limiting' }, { label: 'High near (surgeon, jeweler, microscopist)', value: 2, note: 'Critical near precision required' }] },
  ];

  const calculate = () => {
    const total = Object.values(scores).reduce((s, v) => s + v, 0);
    let risk, color, advice;
    if (total <= 4) { risk = 'LOW'; color = 'var(--accent-green)'; advice = 'Patient is an excellent candidate for premium IOLs. Neuroadaptation expected to be smooth and fast (2-4 weeks for most symptoms, 2-3 months for full optimization). Standard counseling is sufficient.'; }
    else if (total <= 8) { risk = 'MODERATE'; color = 'var(--accent-amber)'; advice = 'Patient can succeed with premium IOLs but requires thorough pre-operative counseling. Set clear timeline expectations (3-6 months). Consider scheduling additional follow-up visits at 1 month and 3 months specifically to address adaptation concerns. Written information about neuroadaptation is recommended.'; }
    else if (total <= 13) { risk = 'HIGH'; color = 'var(--accent-rose)'; advice = 'Significant neuroadaptation risk. Consider stepping down from trifocal to EDOF or non-diffractive EDOF (Vivity). If proceeding with trifocal, document extensive counseling and shared decision-making. Plan for extra postop support. The risk of dissatisfaction and IOL exchange request is elevated.'; }
    else { risk = 'VERY HIGH'; color = 'var(--accent-rose)'; advice = 'Strong recommendation to avoid diffractive multifocal IOLs. Enhanced monofocal or Vivity (non-diffractive EDOF) are the safest premium options. Monofocal with monovision strategy is the lowest-risk approach. If patient insists on trifocal despite counseling, document thoroughly and consider having them sign a specific premium IOL consent form.'; }
    setResult({ total, risk, color, advice, maxScore: factors.reduce((s, f) => s + Math.max(...f.options.map(o => o.value)), 0) });
  };

  return (
    <div>
      <SectionTitle icon="🧠" title="Neuroadaptation Risk Score" subtitle="Predict adaptation difficulty and counsel accordingly" />
      {factors.map((f, fi) => (
        <Card key={fi} style={{ marginBottom: '12px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '10px' }}>{f.label}</div>
          <div style={{ display: 'grid', gap: '6px' }}>
            {f.options.map((o, oi) => {
              const sel = scores[f.id] === o.value;
              return (
                <div key={oi} onClick={() => set(f.id, o.value)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: `1px solid ${sel ? 'var(--border-active)' : 'var(--border-subtle)'}`, background: sel ? 'rgba(99,179,237,0.08)' : 'transparent', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: sel ? 'none' : '2px solid var(--text-muted)', background: sel ? 'var(--accent-blue)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#fff', flexShrink: 0 }}>{sel ? '✓' : ''}</div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: sel ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{o.label}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)', marginLeft: '8px' }}>({o.note})</span>
                  </div>
                  <Badge variant={o.value <= 1 ? 'success' : o.value <= 2 ? 'default' : o.value <= 3 ? 'warning' : 'danger'} small>+{o.value}</Badge>
                </div>
              );
            })}
          </div>
        </Card>
      ))}
      <button onClick={calculate} style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 700, padding: '14px 32px', border: 'none', borderRadius: 'var(--radius-sm)', background: 'var(--gradient-cool)', color: '#0a0e17', cursor: 'pointer', width: '100%', marginBottom: '20px' }}>🧠 Calculate Neuroadaptation Risk</button>
      {result && <Card style={{ borderLeft: `4px solid ${result.color}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '42px', fontWeight: 800, color: result.color }}>{result.total}</div>
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)' }}>out of {result.maxScore} possible</div>
            <Badge variant={result.risk === 'LOW' ? 'success' : result.risk === 'MODERATE' ? 'warning' : 'danger'}>{result.risk} RISK</Badge>
          </div>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{result.advice}</p>
      </Card>}
    </div>
  );
}

// ===========================
// ECP: OCCUPATION-SPECIFIC PROFILES
// ===========================
function ECPOccupationProfiles() {
  const [expanded, setExpanded] = useState(null);
  const profiles = [
    { title: 'Pilot / Airline Crew', icon: '✈', critical: 'distance + night', demands: { distance: 5, intermediate: 3, near: 2, nightVision: 5, contrastSens: 5 }, recommended: ['Monofocal at plano', 'Enhanced monofocal (Eyhance)', 'Non-diffractive EDOF (Vivity) — with caution'], avoid: ['Diffractive multifocals (halos unacceptable)', 'Diffractive EDOF (Symfony) — halos in dark cockpit'], notes: 'Aviation regulations may require specific post-op visual acuity standards. Any dysphotopsia is potentially career-ending. Monofocal with reading glasses is the safest option. Must meet CAA/FAA visual requirements. Consult aviation medical examiner before surgery.', targetRefraction: 'Plano or -0.25D for safety margin. Absolutely no intentional monovision.' },
    { title: 'Surgeon / Dentist / Microscopist', icon: '🔬', critical: 'near + intermediate', demands: { distance: 3, intermediate: 5, near: 5, nightVision: 2, contrastSens: 4 }, recommended: ['Trifocal (if overall eye health excellent)', 'TECNIS Synergy (strong near + intermediate)', 'Bilateral EDOF + near-targeted non-dominant eye'], avoid: ['Monofocal at plano (insufficient near for professional work without glasses)', 'Excessive monovision (>-1.50D, affects stereo for surgery)'], notes: 'These professionals have highly critical near and intermediate demands. Loupes/microscopes may compensate, but uncorrected near is often desired. Near working distance varies: surgeons ~40cm, dentists ~35cm, microscopists use fixed oculars. Assess their specific working distance before IOL selection.', targetRefraction: 'Consider targeting -0.50 to -0.75D in one eye for enhanced near while maintaining good distance.' },
    { title: 'Truck Driver / Professional Driver', icon: '🚛', critical: 'distance + night', demands: { distance: 5, intermediate: 3, near: 1, nightVision: 5, contrastSens: 4 }, recommended: ['Monofocal at plano', 'Enhanced monofocal (Eyhance)', 'Non-diffractive EDOF (Vivity)'], avoid: ['Diffractive multifocals', 'Aggressive monovision'], notes: 'Night driving with oncoming headlights is the critical scenario. Any halos or starburst can be hazardous. Regulatory visual requirements apply (varies by country). Must pass driving visual standard post-operatively. Similar considerations for taxi, rideshare, and bus drivers.', targetRefraction: 'Plano. Do not compromise distance clarity.' },
    { title: 'Office / Computer Worker', icon: '💻', critical: 'intermediate', demands: { distance: 3, intermediate: 5, near: 3, nightVision: 2, contrastSens: 3 }, recommended: ['EDOF (Vivity, Symfony, LENTIS Comfort)', 'Trifocal if also wants near', 'Enhanced monofocal + micro-monovision'], avoid: ['Standard monofocal at plano alone (insufficient intermediate)'], notes: 'The modern office worker spends 6-10 hours at 50-80cm distance (computer screens). Intermediate vision is their primary need. EDOF lenses are ideal. Trifocal acceptable if they also want near. Consider monitor distance and multi-screen setups. Some may also need good phone/tablet distance (30-40cm).', targetRefraction: 'Plano or -0.25D to -0.50D can boost intermediate without significant distance loss.' },
    { title: 'Artist / Designer / Photographer', icon: '🎨', critical: 'color + contrast + near', demands: { distance: 3, intermediate: 4, near: 4, nightVision: 2, contrastSens: 5 }, recommended: ['Monofocal (best contrast and color perception)', 'Non-diffractive EDOF (Vivity)', 'Enhanced monofocal'], avoid: ['Diffractive multifocals (can alter contrast perception)'], notes: 'Color accuracy and contrast sensitivity are paramount. Diffractive optics split light, reducing contrast — even mildly. Some artists report altered color perception with certain IOL materials or designs. Hydrophobic acrylic IOLs may have slight yellow tint (chromophore for UV/blue light protection) — this is usually imperceptible but some artists notice it. Clear (non-yellow) IOLs are available.', targetRefraction: 'Based on their dominant working distance. Artists working on canvas/easel = intermediate. Detail painters/jewelers = near.' },
    { title: 'Retired / General Lifestyle', icon: '🌅', critical: 'balanced', demands: { distance: 4, intermediate: 3, near: 3, nightVision: 3, contrastSens: 3 }, recommended: ['Any IOL type — based on preference and eye health', 'Trifocal for maximum freedom', 'EDOF for balanced approach', 'Monofocal if conservative'], avoid: ['N/A — depends on eye health and tolerance'], notes: 'Most flexible group for IOL selection. Decision is primarily driven by: (1) eye health/comorbidities, (2) personal preference for spectacle independence vs visual quality, (3) hobbies and activities. Important to assess specific hobbies: golf (distance), reading (near), cooking (intermediate), crosswords (near), TV (intermediate-distance).', targetRefraction: 'Based on lifestyle assessment and IOL choice.' },
  ];

  return (
    <div>
      <SectionTitle icon="👔" title="Occupation-Specific Visual Profiles" subtitle="Tailor IOL selection to professional visual demands" />
      {profiles.map((p, i) => (
        <Card key={i} hover onClick={() => setExpanded(expanded === i ? null : i)} style={{ marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '28px' }}>{p.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)' }}>{p.title}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)' }}>Critical: {p.critical}</div>
            </div>
            <span style={{ color: 'var(--text-muted)', transition: 'transform 0.3s', transform: expanded === i ? 'rotate(180deg)' : 'none' }}>▾</span>
          </div>
          {expanded === i && <div style={{ marginTop: '16px', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
            {/* Visual Demand Bars */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>Visual Demand Profile</div>
              {Object.entries(p.demands).map(([key, val]) => (
                <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)', width: '100px', textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1')}</span>
                  <div style={{ flex: 1, height: '8px', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${val * 20}%`, height: '100%', borderRadius: '4px', background: val >= 4 ? 'var(--accent-rose)' : val >= 3 ? 'var(--accent-amber)' : 'var(--accent-green)', transition: 'width 0.5s' }} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)', width: '20px' }}>{val}/5</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
              <div style={{ background: 'rgba(104,211,145,0.06)', borderRadius: 'var(--radius-sm)', padding: '12px' }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, color: 'var(--accent-green)', marginBottom: '6px', textTransform: 'uppercase' }}>✓ Recommended</div>
                {p.recommended.map((r, ri) => <div key={ri} style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)', padding: '2px 0' }}>• {r}</div>)}
              </div>
              <div style={{ background: 'rgba(252,129,129,0.06)', borderRadius: 'var(--radius-sm)', padding: '12px' }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, color: 'var(--accent-rose)', marginBottom: '6px', textTransform: 'uppercase' }}>✗ Avoid</div>
                {p.avoid.map((a, ai) => <div key={ai} style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)', padding: '2px 0' }}>• {a}</div>)}
              </div>
            </div>
            <div style={{ background: 'rgba(99,179,237,0.06)', borderRadius: 'var(--radius-sm)', padding: '12px', marginBottom: '8px' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '4px', textTransform: 'uppercase' }}>🎯 Target Refraction</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)' }}>{p.targetRefraction}</div>
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>{p.notes}</div>
          </div>}
        </Card>
      ))}
    </div>
  );
}

// ===========================
// ECP PORTAL
// ===========================
function ECPPortal({ onBack }) {
  const [tab,setTab]=useState('tree');
  const tabs=[{id:'tree',label:'Decision Tree',icon:'🌳'},{id:'analyzer',label:'Analyzer',icon:'🔬'},{id:'screening',label:'Screening',icon:'✅'},{id:'formulas',label:'Formulas',icon:'📊'},{id:'toric',label:'Toric Guide',icon:'🔄'},{id:'mixmatch',label:'Mix & Match',icon:'🔀'},{id:'neuro',label:'Neuroadapt',icon:'🧠'},{id:'occupation',label:'Occupations',icon:'👔'},{id:'contra',label:'Exclusions',icon:'🛡'},{id:'special',label:'Special Cases',icon:'🧩'},{id:'db',label:'IOL Database',icon:'🔍'},{id:'links',label:'Resources',icon:'🔗'}];
  return (
    <div style={{ minHeight:'100vh', padding:'20px' }}><div style={{ maxWidth:'960px', margin:'0 auto' }}>
      <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'24px', flexWrap:'wrap' }}>
        <button onClick={onBack} style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-muted)', background:'none', border:'none', cursor:'pointer' }}>← Home</button>
        <div style={{ display:'flex', alignItems:'center', gap:'8px' }}><div style={{ width:'32px', height:'32px', borderRadius:'8px', background:'var(--gradient-primary)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px' }}>🩺</div><span style={{ fontFamily:'var(--font-display)', fontSize:'18px', fontWeight:700, color:'var(--text-primary)' }}>ECP Clinical Portal</span></div>
      </div>
      <TabBar tabs={tabs} active={tab} onChange={setTab} />
      <div style={{ marginTop:'28px' }}>
        {tab==='tree'&&<ECPDecisionTree />}{tab==='analyzer'&&<ECPQuantitativeAnalyzer />}{tab==='screening'&&<ECPScreeningChecklist />}{tab==='formulas'&&<ECPFormulaSelector />}{tab==='toric'&&<ECPToricPlanning />}{tab==='mixmatch'&&<ECPMixMatch />}{tab==='neuro'&&<ECPNeuroadaptation />}{tab==='occupation'&&<ECPOccupationProfiles />}{tab==='contra'&&<ECPContraindicationsMatrix />}{tab==='special'&&<ECPSpecialCases />}{tab==='db'&&<ECPIOLComparison />}{tab==='links'&&<ECPResources />}
      </div>
    </div></div>
  );
}

// ===========================
// PATIENT: LIFESTYLE ASSESSMENT
// ===========================
function PatientAssessment() {
  const [step,setStep]=useState(0);
  const [scores,setScores]=useState({});
  const [result,setResult]=useState(null);
  const qs=[
    {id:'drive',q:'How often do you drive, especially at night?',opts:[{l:'Frequently, including night driving',v:3,t:'dist'},{l:'Mostly during daytime',v:2,t:'dist'},{l:'Rarely drive',v:1,t:'dist'}]},
    {id:'comp',q:'How much time on computers or tablets?',opts:[{l:'Most of my day (4+ hours)',v:3,t:'inter'},{l:'A few hours daily',v:2,t:'inter'},{l:'Rarely',v:1,t:'inter'}]},
    {id:'read',q:'How important is reading without glasses?',opts:[{l:'Extremely — I read a lot (books, phone, menus)',v:3,t:'near'},{l:'Somewhat important',v:2,t:'near'},{l:'Not a priority — reading glasses are fine',v:1,t:'near'}]},
    {id:'free',q:'How important is being completely glasses-free?',opts:[{l:'My top priority — no glasses at all',v:3,t:'prem'},{l:'Nice but not essential',v:2,t:'prem'},{l:'Comfortable wearing glasses sometimes',v:1,t:'prem'}]},
    {id:'halo',q:'How would you feel about halos or glare around lights at night?',opts:[{l:'Absolutely cannot tolerate any',v:1,t:'tol'},{l:'Could adapt if overall vision is great',v:2,t:'tol'},{l:'Wouldn\'t mind if it means glasses freedom',v:3,t:'tol'}]},
    {id:'hobby',q:'Most important hobbies/activities?',opts:[{l:'Outdoor/sports/travel (distance)',v:1,t:'dhob'},{l:'Cooking/gardening/crafts (arm\'s length)',v:2,t:'ihob'},{l:'Reading/sewing/detailed close-up work',v:3,t:'nhob'}]},
    {id:'pers',q:'Your personality regarding vision quality?',opts:[{l:'Perfectionist — notice every imperfection',v:1,t:'pers'},{l:'Practical — want good functional vision',v:2,t:'pers'},{l:'Easy-going — adapt quickly',v:3,t:'pers'}]},
  ];
  const handle=(id,v,t)=>{const ns={...scores,[id]:{v,t}};setScores(ns);if(step<qs.length-1)setStep(step+1);else genResult(ns);};
  const genResult=(sc)=>{
    const prem=(sc.free?.v||0)+(sc.halo?.v||0)+(sc.pers?.v||0);
    const near=(sc.read?.v||0)+(sc.hobby?.v===3?3:0);
    let r;
    if(prem<=4) r={title:'Standard Monofocal Lens',icon:'🎯',desc:'A standard monofocal lens focused on distance vision is an excellent choice for you. You\'re comfortable with glasses, and this option provides the sharpest, most predictable distance vision with no risk of halos or glare.',pros:['Sharpest distance vision possible','No halos or glare at night','Most predictable outcome','Lowest risk of dissatisfaction'],cons:['Reading glasses needed for near tasks','May need glasses for computer too'],ask:'Ask about targeting one eye slightly for near ("monovision") to reduce glasses needs.',type:'monofocal'};
    else if(prem>=7&&near>=4) r={title:'Trifocal / Multifocal Lens',icon:'🌟',desc:'You strongly value spectacle independence with balanced vision needs. A trifocal lens can provide clear vision at near, intermediate, and distance without glasses.',pros:['Vision at all distances','Greatest glasses freedom','Good for active lifestyles'],cons:['Halos/glare around lights at night (usually improves over 3-6 months)','Brain needs 3-6 months to fully adapt','Must have healthy eyes — not suitable with certain conditions'],ask:'Ask if your eye health makes you a good candidate. Mention if you drive a lot at night.',type:'multifocal'};
    else if((sc.comp?.v||0)>=2) r={title:'Extended Depth of Focus (EDOF) Lens',icon:'📐',desc:'Your lifestyle suggests strong intermediate vision needs. An EDOF lens extends clear vision from distance through intermediate with significantly fewer visual side effects than multifocal lenses.',pros:['Excellent distance AND intermediate vision','Much less halos/glare than multifocal','Great for computer users','Good night driving quality'],cons:['Near reading may still need glasses','Not as strong at near as a trifocal'],ask:'Ask about EDOF options like Vivity or Symfony, and whether a blended approach could work.',type:'edof'};
    else r={title:'Enhanced Monofocal or EDOF Lens',icon:'✨',desc:'You want improvement beyond basic monofocal but value visual quality. An enhanced monofocal provides a step up in intermediate vision while keeping excellent distance.',pros:['Sharp distance vision','Improved intermediate','Very low halos/glare risk','Balanced, predictable outcome'],cons:['Reading glasses still needed for fine print'],ask:'Ask about enhanced monofocal options like TECNIS Eyhance or non-diffractive EDOF like Vivity.',type:'enhanced'};
    setResult(r);
  };
  const reset=()=>{setStep(0);setScores({});setResult(null);};
  if(result) return (
    <div>
      <SectionTitle icon={result.icon} title="Your Personalized Recommendation" subtitle="Based on your lifestyle and preferences" />
      <IOLDiagram type={result.type} />
      <Card style={{ borderLeft:'4px solid var(--accent-cyan)', marginBottom:'20px' }}>
        <h3 style={{ fontFamily:'var(--font-display)', fontSize:'24px', color:'var(--text-primary)', margin:'0 0 12px' }}>{result.title}</h3>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'15px', color:'var(--text-secondary)', lineHeight:1.7, margin:'0 0 24px' }}>{result.desc}</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:'16px', marginBottom:'20px' }}>
          <div style={{ background:'rgba(104,211,145,0.06)', borderRadius:'var(--radius-sm)', padding:'16px' }}><div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:'var(--accent-green)', marginBottom:'8px', textTransform:'uppercase' }}>✓ ADVANTAGES</div>{result.pros.map((p,i)=><div key={i} style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-secondary)', padding:'3px 0' }}>• {p}</div>)}</div>
          <div style={{ background:'rgba(246,173,85,0.06)', borderRadius:'var(--radius-sm)', padding:'16px' }}><div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:'var(--accent-amber)', marginBottom:'8px', textTransform:'uppercase' }}>⚡ THINGS TO KNOW</div>{result.cons.map((c,i)=><div key={i} style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-secondary)', padding:'3px 0' }}>• {c}</div>)}</div>
        </div>
        <div style={{ background:'rgba(99,179,237,0.08)', borderRadius:'var(--radius-sm)', padding:'16px' }}><div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:'var(--accent-blue)', marginBottom:'6px', textTransform:'uppercase' }}>💬 DISCUSS WITH YOUR SURGEON</div><p style={{ fontFamily:'var(--font-body)', fontSize:'14px', color:'var(--text-secondary)', margin:0, lineHeight:1.6 }}>{result.ask}</p></div>
      </Card>
      <button onClick={reset} style={{ fontFamily:'var(--font-body)', fontSize:'14px', fontWeight:600, padding:'12px 24px', border:'1px solid var(--border-subtle)', borderRadius:'var(--radius-sm)', background:'var(--bg-card)', color:'var(--text-secondary)', cursor:'pointer' }}>↺ Retake Assessment</button>
    </div>
  );
  const q=qs[step];
  return (
    <div>
      <SectionTitle icon="📋" title="Lifestyle Vision Assessment" subtitle="Find the best lens option for your lifestyle" />
      <div style={{ marginBottom:'20px', display:'flex', gap:'4px' }}>{qs.map((_,i)=><div key={i} style={{ flex:1, height:'4px', borderRadius:'2px', background:i<step?'var(--accent-cyan)':i===step?'var(--accent-blue)':'rgba(255,255,255,0.08)' }} />)}</div>
      <Card>
        <div style={{ fontFamily:'var(--font-body)', fontSize:'12px', color:'var(--text-muted)', marginBottom:'12px' }}>QUESTION {step+1} OF {qs.length}</div>
        <h3 style={{ fontFamily:'var(--font-display)', fontSize:'20px', color:'var(--text-primary)', margin:'0 0 20px' }}>{q.q}</h3>
        <div style={{ display:'grid', gap:'10px' }}>{q.opts.map((o,i)=><PatientOption key={i} label={o.l} onClick={()=>handle(q.id,o.v,o.t)} />)}</div>
        {step>0&&<button onClick={()=>setStep(step-1)} style={{ marginTop:'16px', fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-muted)', background:'none', border:'none', cursor:'pointer' }}>← Previous</button>}
      </Card>
    </div>
  );
}

// ===========================
// PATIENT: EDUCATION WITH ILLUSTRATIONS
// ===========================
function PatientEducation() {
  const [exp,setExp]=useState(null);
  const types=[
    {name:'Standard Monofocal',icon:'🎯',tag:'Sharp distance — glasses for reading',diagramType:'monofocal',how:'A monofocal lens focuses light at one specific distance, like a fixed-focus camera. Everything far away is sharp, but you need glasses for close-up.',best:'Want sharpest distance vision, don\'t mind reading glasses, drive at night, or have eye conditions limiting premium options.',expect:'Excellent distance vision. Reading glasses needed. No halos or glare.',cost:'Usually covered by insurance as standard option.'},
    {name:'Enhanced Monofocal',icon:'✨',tag:'Better than standard — modest intermediate boost',diagramType:'enhanced',how:'Subtle modifications to the lens surface gently extend focus beyond just distance. A "monofocal plus" — distance clarity with a little extra.',best:'Want a step up without multifocal risks. Good for some computer vision improvement.',expect:'Sharp distance, improved computer/dashboard vision. Reading glasses for fine print. Virtually no halos.',cost:'May have additional cost beyond standard.'},
    {name:'EDOF (Extended Depth of Focus)',icon:'📐',tag:'Distance through intermediate — less near',diagramType:'edof',how:'EDOF lenses elongate the focal point instead of splitting light. You get a continuous stretch of clear vision from far through arm\'s length.',best:'Computer workers, cooks, those wanting less glasses without significant halos.',expect:'Good distance and intermediate. Near for small print needs glasses. Mild halos possible, much less than multifocal.',cost:'Premium lens — additional out-of-pocket cost.'},
    {name:'Multifocal / Trifocal',icon:'🌟',tag:'Near, intermediate, and far — maximum freedom',diagramType:'multifocal',how:'These split incoming light into multiple focus points. Your brain learns to select which image to use. Like built-in progressive glasses.',best:'Strongly want glasses freedom at all distances. Willing to accept some visual trade-offs.',expect:'Vision at all distances. Halos around lights (usually improve over 3-6 months). Small percentage may need glasses for very fine print.',cost:'Premium — highest additional cost. Eye health must be suitable.'},
    {name:'Toric IOL',icon:'🔄',tag:'Corrects astigmatism — available in all types',diagramType:'toric',how:'Toric lenses have built-in astigmatism correction, positioned at a precise angle to neutralize corneal astigmatism.',best:'Anyone with significant astigmatism. Available as monofocal, EDOF, or multifocal.',expect:'Sharper vision than non-toric if you have astigmatism. Must be precisely aligned.',cost:'Premium addition — varies by base lens type.'},
  ];
  return (
    <div>
      <SectionTitle icon="📚" title="Understanding Your Lens Options" subtitle="Learn about each type with visual diagrams" />
      <Card style={{ marginBottom:'20px', background:'rgba(99,179,237,0.04)', borderLeft:'4px solid var(--accent-blue)' }}>
        <h4 style={{ fontFamily:'var(--font-display)', fontSize:'16px', color:'var(--text-primary)', margin:'0 0 12px' }}>What are Halos and Glare?</h4>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'14px', color:'var(--text-secondary)', margin:'0 0 16px', lineHeight:1.6 }}>Some premium lenses can cause visual effects around lights, especially at night. These typically improve significantly as your brain adapts over 3-6 months. Here's what they look like:</p>
        <DysphotopsiaDiagram />
      </Card>
      <div style={{ display:'grid', gap:'12px' }}>{types.map((t,i)=><Card key={i} hover onClick={()=>setExp(exp===i?null:i)}>
        <div style={{ display:'flex', alignItems:'center', gap:'14px' }}>
          <span style={{ fontSize:'32px' }}>{t.icon}</span>
          <div style={{ flex:1 }}><div style={{ fontFamily:'var(--font-display)', fontSize:'18px', fontWeight:700, color:'var(--text-primary)' }}>{t.name}</div><div style={{ fontFamily:'var(--font-body)', fontSize:'14px', color:'var(--text-secondary)' }}>{t.tag}</div></div>
          <span style={{ color:'var(--text-muted)', fontSize:'18px', transition:'transform 0.3s', transform:exp===i?'rotate(180deg)':'none' }}>▾</span>
        </div>
        {exp===i&&<div style={{ marginTop:'20px', borderTop:'1px solid var(--border-subtle)', paddingTop:'20px' }}>
          <IOLDiagram type={t.diagramType} />
          {[{l:'How It Works',text:t.how,c:'var(--accent-blue)'},{l:'Best For',text:t.best,c:'var(--accent-green)'},{l:'What to Expect',text:t.expect,c:'var(--accent-cyan)'},{l:'Cost & Coverage',text:t.cost,c:'var(--accent-amber)'}].map((s,si)=><div key={si} style={{ marginBottom:'12px' }}><div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:s.c, marginBottom:'4px', textTransform:'uppercase' }}>{s.l}</div><p style={{ fontFamily:'var(--font-body)', fontSize:'14px', color:'var(--text-secondary)', margin:0, lineHeight:1.7 }}>{s.text}</p></div>)}
        </div>}
      </Card>)}</div>
    </div>
  );
}

// ===========================
// PATIENT: TIMELINE
// ===========================
function PatientTimeline() {
  const tl=[
    {time:'2-4 Weeks Before',title:'Pre-Op Assessment',icon:'🔍',detail:'Eye measurements taken for correct lens power. Eye surface evaluated and treated if needed. Lens options discussed.',tip:'Stop contact lenses as instructed (soft: 1-2 wks, RGP: 3-4 wks before measurements).'},
    {time:'1 Day Before',title:'Final Preparation',icon:'📋',detail:'Start antibiotic/anti-inflammatory drops. Arrange transport. Fasting if instructed.',tip:'Prepare a comfortable recovery area at home.'},
    {time:'Surgery Day',title:'The Procedure',icon:'🏥',detail:'Surgery takes 15-30 minutes. Eye numbed but you\'re awake. Cloudy lens removed with ultrasound, replaced with your new IOL.',tip:'Wear protective shield. Some blur is normal. Don\'t rub your eye.'},
    {time:'Day 1',title:'First Follow-Up',icon:'👁',detail:'Surgeon checks eye, IOL position, pressure. Vision may already be noticeably clearer.',tip:'Start drop regimen. Wear shield when sleeping for 1-2 weeks.'},
    {time:'Week 1-2',title:'Early Recovery',icon:'🌱',detail:'Vision rapidly improves. Some fluctuation normal. Mild discomfort and light sensitivity possible.',tip:'Avoid heavy lifting, bending, swimming, eye makeup.'},
    {time:'Month 1-3',title:'Stabilization',icon:'📈',detail:'Vision stabilizes. Halos/glare diminish with premium lenses. Glasses prescription can be finalized ~4-6 weeks.',tip:'Be patient with premium lenses — your brain is still adapting.'},
    {time:'Month 3-6',title:'Full Adaptation',icon:'✅',detail:'Final visual outcome reached. Neuroadaptation to premium lenses typically complete.',tip:'Report new floaters, flashes, or sudden vision changes immediately.'},
  ];
  return (
    <div>
      <SectionTitle icon="🗺" title="Your Surgery Journey" subtitle="What to expect from start to finish" />
      <div style={{ position:'relative', paddingLeft:'32px' }}>
        <div style={{ position:'absolute', left:'14px', top:'20px', bottom:'20px', width:'2px', background:'linear-gradient(to bottom,var(--accent-blue),var(--accent-cyan),var(--accent-green))' }} />
        {tl.map((t,i)=><div key={i} style={{ marginBottom:'16px', position:'relative' }}>
          <div style={{ position:'absolute', left:'-24px', top:'24px', width:'12px', height:'12px', borderRadius:'50%', background:'var(--accent-blue)', border:'3px solid var(--bg-deep)', zIndex:1 }} />
          <Card><div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'8px' }}><span style={{ fontSize:'20px' }}>{t.icon}</span><div><Badge variant="default" small>{t.time}</Badge><h4 style={{ fontFamily:'var(--font-display)', fontSize:'16px', fontWeight:700, color:'var(--text-primary)', margin:'4px 0 0' }}>{t.title}</h4></div></div>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'14px', color:'var(--text-secondary)', margin:'0 0 10px', lineHeight:1.6 }}>{t.detail}</p>
            <div style={{ background:'rgba(104,211,145,0.06)', borderRadius:'var(--radius-sm)', padding:'10px 14px', display:'flex', gap:'8px' }}><span style={{ color:'var(--accent-green)', fontWeight:700 }}>💡</span><span style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--accent-green)', opacity:0.9 }}>{t.tip}</span></div>
          </Card>
        </div>)}
      </div>
    </div>
  );
}

// ===========================
// PATIENT: QUESTIONS
// ===========================
function PatientQuestions() {
  const cats=[
    {title:'Before Surgery',icon:'🗓',qs:['Am I a good candidate for a premium lens, or should I stick with standard?','Do I have any eye conditions that limit my lens choices?','What is my astigmatism level — would a toric lens help?','Which lens type do you recommend for my lifestyle and why?','What happens if I\'m not happy with the lens after surgery?','Is the lens power calculation straightforward for my eyes, or am I in a difficult range?','Do I need to treat dry eye before surgery?','Can I see a simulation of vision with different lens options?']},
    {title:'About Surgery',icon:'🏥',qs:['How many cataract surgeries do you perform per year?','What technology do you use for eye measurements?','Will both eyes be done same day or separately?','What anesthesia will be used?','How long does the surgery take?','What is your complication rate?']},
    {title:'After Surgery',icon:'🩹',qs:['What is the typical recovery timeline?','When can I drive, exercise, and return to normal activities?','What should I expect with halos/glare initially?','How long does neuroadaptation take for premium lenses?','What follow-up appointments will I need?','If I\'m not satisfied, what are my options (enhancement, lens exchange)?','What are the warning signs that something is wrong?']},
    {title:'Cost & Practical',icon:'💰',qs:['What is the total cost including lens, surgeon, and facility fees?','What does insurance cover vs out-of-pocket?','Is the premium upgrade fee per eye or total?','Are follow-up visits included?','If a lens exchange is needed, is there additional cost?']},
  ];
  return (
    <div>
      <SectionTitle icon="❓" title="Questions to Ask Your Surgeon" subtitle="Be prepared — knowledge is power" />
      {cats.map((c,ci)=><Card key={ci} style={{ marginBottom:'16px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'16px' }}><span style={{ fontSize:'22px' }}>{c.icon}</span><h3 style={{ fontFamily:'var(--font-display)', fontSize:'18px', fontWeight:700, color:'var(--text-primary)', margin:0 }}>{c.title}</h3></div>
        <div style={{ display:'grid', gap:'6px' }}>{c.qs.map((q,qi)=><div key={qi} style={{ padding:'10px 14px', borderRadius:'var(--radius-sm)', background:'rgba(0,0,0,0.15)', borderLeft:'3px solid var(--accent-blue)' }}><span style={{ fontFamily:'var(--font-body)', fontSize:'14px', color:'var(--text-secondary)', lineHeight:1.5 }}>{q}</span></div>)}</div>
      </Card>)}
    </div>
  );
}

// ===========================
// PATIENT PORTAL
// ===========================
function PatientPortal({ onBack }) {
  const [tab,setTab]=useState('assess');
  const tabs=[{id:'assess',label:'My Assessment',icon:'📋'},{id:'edu',label:'Lens Types',icon:'📚'},{id:'tl',label:'Surgery Journey',icon:'🗺'},{id:'qs',label:'Questions',icon:'❓'}];
  return (
    <div style={{ minHeight:'100vh', padding:'20px' }}><div style={{ maxWidth:'960px', margin:'0 auto' }}>
      <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'24px', flexWrap:'wrap' }}>
        <button onClick={onBack} style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-muted)', background:'none', border:'none', cursor:'pointer' }}>← Home</button>
        <div style={{ display:'flex', alignItems:'center', gap:'8px' }}><div style={{ width:'32px', height:'32px', borderRadius:'8px', background:'var(--gradient-warm)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px' }}>👤</div><span style={{ fontFamily:'var(--font-display)', fontSize:'18px', fontWeight:700, color:'var(--text-primary)' }}>Patient Portal</span></div>
      </div>
      <TabBar tabs={tabs} active={tab} onChange={setTab} />
      <div style={{ marginTop:'28px' }}>{tab==='assess'&&<PatientAssessment />}{tab==='edu'&&<PatientEducation />}{tab==='tl'&&<PatientTimeline />}{tab==='qs'&&<PatientQuestions />}</div>
    </div></div>
  );
}

// ===========================
// ABOUT PAGE
// ===========================
function AboutPage({ onBack }) {
  return (
    <div style={{ minHeight:'100vh', padding:'20px' }}><div style={{ maxWidth:'720px', margin:'0 auto' }}>
      <button onClick={onBack} style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-muted)', background:'none', border:'none', cursor:'pointer', marginBottom:'24px' }}>← Home</button>

      <SectionTitle icon="👁" title="About IOL Navigator" />

      <Card style={{ marginBottom:'20px' }}>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'15px', color:'var(--text-secondary)', lineHeight:1.8, margin:0 }}>
          <strong style={{ color:'var(--text-primary)' }}>IOL Navigator</strong> is an open-source, evidence-based decision-support platform designed to assist eye care professionals in selecting the optimal intraocular lens (IOL) for their cataract surgery patients, and to educate patients about their lens options in clear, accessible language.
        </p>
        <br/>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'15px', color:'var(--text-secondary)', lineHeight:1.8, margin:0 }}>
          The platform integrates clinical decision algorithms, pre-operative screening checklists, IOL power formula guidance across all axial length ranges and special cases, a comprehensive contraindication matrix, and an extensive IOL database spanning major manufacturers including Alcon, Johnson & Johnson Vision, HOYA, BVI, Bausch + Lomb, Rayner, Carl Zeiss, and others.
        </p>
        <br/>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'15px', color:'var(--text-secondary)', lineHeight:1.8, margin:0 }}>
          For patients, IOL Navigator offers a lifestyle-based assessment tool with personalized recommendations, visual diagrams explaining how each IOL type works, an illustrated surgery timeline, and a curated list of questions to discuss with their surgeon — all designed to support shared decision-making and improve outcomes.
        </p>
        <br/>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'15px', color:'var(--text-secondary)', lineHeight:1.8, margin:0 }}>
          As an open-source project, IOL Navigator is freely available for the eye care community. Contributions, suggestions, and improvements from fellow professionals are welcome and encouraged.
        </p>
      </Card>

      <Card style={{ marginBottom:'20px' }}>
        <div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:'var(--accent-blue)', marginBottom:'16px', textTransform:'uppercase', letterSpacing:'0.05em' }}>Created By</div>
        <div style={{ fontFamily:'var(--font-display)', fontSize:'24px', fontWeight:700, color:'var(--text-primary)', marginBottom:'20px' }}>Charbel Faraj</div>
        <div style={{ display:'grid', gap:'10px' }}>
          <a href="https://www.linkedin.com/in/charbelfaraj/" target="_blank" rel="noopener noreferrer" style={{ display:'flex', alignItems:'center', gap:'12px', padding:'12px 16px', background:'rgba(0,0,0,0.2)', borderRadius:'var(--radius-sm)', textDecoration:'none', border:'1px solid transparent', transition:'all 0.2s' }} onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--border-active)';}} onMouseLeave={e=>{e.currentTarget.style.borderColor='transparent';}}>
            <div style={{ width:'36px', height:'36px', borderRadius:'8px', background:'#0A66C2', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </div>
            <div><div style={{ fontFamily:'var(--font-body)', fontSize:'14px', fontWeight:600, color:'var(--accent-blue)' }}>LinkedIn Profile</div><div style={{ fontFamily:'var(--font-body)', fontSize:'12px', color:'var(--text-muted)' }}>linkedin.com/in/charbelfaraj</div></div>
          </a>
          <a href="mailto:theiolnavigator@gmail.com" style={{ display:'flex', alignItems:'center', gap:'12px', padding:'12px 16px', background:'rgba(0,0,0,0.2)', borderRadius:'var(--radius-sm)', textDecoration:'none', border:'1px solid transparent', transition:'all 0.2s' }} onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--border-active)';}} onMouseLeave={e=>{e.currentTarget.style.borderColor='transparent';}}>
            <div style={{ width:'36px', height:'36px', borderRadius:'8px', background:'var(--gradient-warm)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px' }}>✉</div>
            <div><div style={{ fontFamily:'var(--font-body)', fontSize:'14px', fontWeight:600, color:'var(--accent-blue)' }}>theiolnavigator@gmail.com</div><div style={{ fontFamily:'var(--font-body)', fontSize:'12px', color:'var(--text-muted)', marginTop:'2px' }}>For any inquiry, idea, or improvement suggestion — we'd love to hear from you.</div></div>
          </a>
        </div>
      </Card>

      <Card>
        <div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, color:'var(--accent-amber)', marginBottom:'12px', textTransform:'uppercase' }}>⚕ Disclaimer</div>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-secondary)', lineHeight:1.7, margin:0 }}>
          IOL Navigator is intended for educational and clinical decision-support purposes only. It does not replace professional clinical judgment. All IOL selection decisions should be made by qualified eye care professionals in consultation with their patients. The information provided is based on published clinical evidence and expert consensus but may not reflect the most current updates from manufacturers. Always verify IOL specifications with the manufacturer and refer to current clinical guidelines.
        </p>
      </Card>
    </div></div>
  );
}

// ===========================
// CONSENT DISCLAIMER POPUP
// ===========================
function ConsentDisclaimer({ onAccept }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ position:'fixed', inset:0, zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center', padding:'20px', background:'rgba(5,8,14,0.92)', backdropFilter:'blur(12px)' }}>
      <div style={{ maxWidth:'520px', width:'100%', background:'var(--bg-card)', border:'1px solid var(--border-subtle)', borderRadius:'var(--radius-lg)', padding:'clamp(24px,5vw,40px) clamp(20px,4vw,36px)', boxShadow:'0 24px 80px rgba(0,0,0,0.6)', textAlign:'center', animation:'fadeIn 0.5s ease' }}>
        <div style={{ width:'56px', height:'56px', borderRadius:'16px', background:'var(--gradient-primary)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'28px', margin:'0 auto 20px' }}>⚕</div>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'22px', fontWeight:700, color:'var(--text-primary)', margin:'0 0 16px' }}>Important Disclaimer</h2>
        <div style={{ background:'rgba(246,173,85,0.06)', border:'1px solid rgba(246,173,85,0.15)', borderRadius:'var(--radius-md)', padding:'20px', marginBottom:'24px', textAlign:'left' }}>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'14px', color:'var(--text-secondary)', lineHeight:1.7, margin:0 }}>
            This tool is intended for <strong style={{ color:'var(--text-primary)' }}>educational and clinical decision-support purposes only</strong>. It does not replace professional clinical judgment.
          </p>
          <br/>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'14px', color:'var(--text-secondary)', lineHeight:1.7, margin:0 }}>
            All IOL selection decisions should be made by qualified eye care professionals in consultation with their patients. The information provided is based on published clinical evidence and expert consensus but may not reflect the most current updates.
          </p>
        </div>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-muted)', marginBottom:'24px' }}>
          By clicking "I Understand & Agree" below, you acknowledge that you have read and understood this disclaimer.
        </p>
        <button
          onClick={onAccept}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            fontFamily:'var(--font-body)', fontSize:'16px', fontWeight:700,
            padding:'14px 40px', border:'none', borderRadius:'var(--radius-sm)',
            background: hovered ? 'linear-gradient(135deg, #4fd1c5 0%, #63b3ed 100%)' : 'var(--gradient-primary)',
            color:'#0a0e17', cursor:'pointer', transition:'all 0.3s',
            transform: hovered ? 'scale(1.02)' : 'none',
            boxShadow: hovered ? '0 8px 32px rgba(99,179,237,0.3)' : '0 4px 16px rgba(99,179,237,0.2)',
            width:'100%', maxWidth:'320px',
          }}
        >
          I Understand & Agree
        </button>
      </div>
    </div>
  );
}

// ===========================
// MAIN APP
// ===========================
export default function IOLNavigator() {
  const [consented, setConsented] = useState(false);
  const [portal,setPortal]=useState(null);
  return (
    <div style={{ ...cssVars, background:'var(--bg-deep)', minHeight:'100vh', fontFamily:'var(--font-body)', color:'var(--text-primary)', position:'relative', overflow:'hidden' }}>
      <style>{`*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:3px}button:hover{opacity:0.95}@keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}::selection{background:rgba(99,179,237,0.3)}
      html,body,#root{width:100%;overflow-x:hidden}
      .landing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;max-width:680px;margin:0 auto}
      .landing-desc{font-size:18px;padding:0 8px}
      @media(max-width:680px){
        .landing-grid{grid-template-columns:1fr!important}
        .landing-desc{font-size:16px!important}
      }
      `}</style>
      {/* Consent Disclaimer Popup */}
      {!consented && <ConsentDisclaimer onAccept={() => setConsented(true)} />}
      {/* Main content - only accessible after consent */}
      {consented && <>
        {/* Top nav when inside a portal */}
        {portal&&portal!=='about'&&<div style={{ position:'fixed', top:0, right:0, padding:'12px 20px', zIndex:100 }}>
          <button onClick={()=>setPortal('about')} style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:600, padding:'8px 16px', border:'1px solid var(--border-subtle)', borderRadius:'100px', background:'rgba(17,24,39,0.9)', color:'var(--text-muted)', cursor:'pointer', backdropFilter:'blur(8px)' }}>About</button>
        </div>}
        <div style={{ animation:'fadeIn 0.5s ease' }}>
          {!portal&&<>
            <LandingPage onSelect={setPortal} />
            {/* About link on landing */}
            <div style={{ textAlign:'center', paddingBottom:'40px' }}>
              <button onClick={()=>setPortal('about')} style={{ fontFamily:'var(--font-body)', fontSize:'14px', fontWeight:600, color:'var(--text-muted)', background:'none', border:'none', cursor:'pointer', textDecoration:'underline', textUnderlineOffset:'4px' }}>About IOL Navigator</button>
            </div>
          </>}
          {portal==='ecp'&&<ECPPortal onBack={()=>setPortal(null)} />}
          {portal==='patient'&&<PatientPortal onBack={()=>setPortal(null)} />}
          {portal==='about'&&<AboutPage onBack={()=>setPortal(null)} />}
        </div>
      </>}
    </div>
  );
}
