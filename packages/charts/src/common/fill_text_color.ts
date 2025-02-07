/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { combineColors, highContrastColor } from './color_calcs';
import { colorToRgba, RGBATupleToString } from './color_library_wrappers';
import { Color, Colors } from './colors';

/**
 * limit used to return fallback color
 * @internal
 */
export const TRANSPARENT_LIMIT = 0.6;

/**
 * Determine the text color hinging on the parameters of maximizeColorContrast, foreground and container foreground
 * returns high contrast color blend from fg anf bg when suitable, otherwise returns fallback color
 *
 * @internal
 */
export function fillTextColor(
  fallbackBGColor: Color,
  foreground: Color | null,
  background: Color = Colors.Transparent.keyword,
): Color {
  let backgroundRGBA = colorToRgba(background);

  if (backgroundRGBA[3] < TRANSPARENT_LIMIT) {
    backgroundRGBA = colorToRgba(fallbackBGColor);
  }

  if (foreground) {
    const foregroundRGBA = colorToRgba(foreground);
    const blendedFgBg = combineColors(foregroundRGBA, backgroundRGBA);
    return RGBATupleToString(highContrastColor(blendedFgBg));
  }

  return RGBATupleToString(highContrastColor(backgroundRGBA));
}
