// Algorithms adapted from http://www.easyrgb.com/en/math.php

const rgbToHsl = function({ R, G, B }) {
  //R, G and B input range = 0 ÷ 255
  //H, S and L output range = 0 ÷ 1.0
  const Rn = ( R / 255 );
  const Gn = ( G / 255 );
  const Bn = ( B / 255 );

  const minRgb = Math.min( Rn, Gn, Bn );    // Min. value of RGB
  const maxRgb = Math.max( Rn, Gn, Bn );    // Max. value of RGB
  const delRgb = maxRgb - minRgb;           // Delta RGB value

  const L = ( maxRgb + minRgb ) / 2;

  if ( delRgb === 0 ) {                // This is a gray, no chroma...
    return ({ H: 0, S: 0, L });
  }
  else {                               // Chromatic data...
    const S = L < 0.5 ?
      delRgb / ( maxRgb + minRgb ) :
      delRgb / ( 2 - maxRgb - minRgb );

     const del_R = ( ( ( maxRgb - Rn ) / 6 ) + ( delRgb / 2 ) ) / delRgb;
     const del_G = ( ( ( maxRgb - Gn ) / 6 ) + ( delRgb / 2 ) ) / delRgb;
     const del_B = ( ( ( maxRgb - Bn ) / 6 ) + ( delRgb / 2 ) ) / delRgb;

     let H = null;
     if      ( Rn === maxRgb ) H = del_B - del_G;
     else if ( Gn === maxRgb ) H = ( 1 / 3 ) + del_R - del_B;
     else if ( Bn === maxRgb ) H = ( 2 / 3 ) + del_G - del_R;

     if ( H < 0 ) H += 1;
     if ( H > 1 ) H -= 1;

     return { H, S, L };
  }
}

const Hue_2_RGB_Value = (v1, v2, vH) => {
   if ( vH < 0 ) vH += 1;
   if( vH > 1 ) vH -= 1;
   if ( ( 6 * vH ) < 1 ) return ( v1 + ( v2 - v1 ) * 6 * vH );
   if ( ( 2 * vH ) < 1 ) return ( v2 );
   if ( ( 3 * vH ) < 2 ) return ( v1 + ( v2 - v1 ) * ( ( 2 / 3 ) - vH ) * 6 );
   return ( v1 );
}

// H, S and L input range = 0 ÷ 1.0
// R, G and B output range = 0 ÷ 255
const hslToRgb = ({ H, S, L }) => {
  if ( S === 0 ) {
    const R = L * 255;
    const G = L * 255;
    const B = L * 255;
    return ({ R, G, B });
  }
  else {
    const v2 = L < 0.5 ?
      L * ( 1 + S ) :
      ( L + S ) - ( S * L )
    ;
   const v1 = 2 * L - v2;
   const R = Math.round( 255 * Hue_2_RGB_Value( v1, v2, H + ( 1 / 3 ) ) );
   const G = Math.round( 255 * Hue_2_RGB_Value( v1, v2, H ) );
   const B = Math.round( 255 * Hue_2_RGB_Value( v1, v2, H - ( 1 / 3 ) ) );
   return ({ R, G, B });
  }
};

const flipValue = (v) => {
  const nv = v + 0.5;
  return nv < 1 ? nv : nv - 1;
}

const getComplement = ({ R, G, B }) => {
  console.log('\nRGB:', {R, G, B});
  // 1. Convert your colour to HSL
  const HSL = rgbToHsl({ R, G, B });

  // 2. Change the Hue value to that of the Hue opposite
  // (e.g., if your Hue is 50°, the opposite one will be at 230° on the wheel — 180° further around).
  console.log('HSL:', HSL);
  // HSL.H = flipValue(HSL.H);
  console.log('HSL (complement):', HSL);

  // 3. For maximum contract, flip the Saturation and Luminosity
  HSL.S = flipValue(HSL.S);
  HSL.L = flipValue(HSL.L);
  console.log('HSL (high contrast complement):', HSL);

  // 4. Convert this new HSL value back to your original colour notation (RGB or whatever).
  const complement_RGB = hslToRgb(HSL);
  console.log('RGB (complement):', complement_RGB);
  return complement_RGB;
};

// getComplement({ R: 128, G: 128, B: 128 });
// getComplement({ R: 0, G: 0, B: 255 });
// getComplement({ R: 0, G: 255, B: 0 });
// getComplement({ R: 255, G: 0, B: 0 });

export { rgbToHsl, hslToRgb, getComplement };
