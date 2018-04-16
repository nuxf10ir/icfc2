import $ from 'jquery';
import { Foundation } from 'foundation-sites/js/foundation.core';
import { rtl, GetYoDigits, transitionend } from 'foundation-sites/js/foundation.util.core';
import { Box } from 'foundation-sites/js/foundation.util.box'
import { onImagesLoaded } from 'foundation-sites/js/foundation.util.imageLoader';
import { Keyboard } from 'foundation-sites/js/foundation.util.keyboard';
import { MediaQuery } from 'foundation-sites/js/foundation.util.mediaQuery';
import { Motion, Move } from 'foundation-sites/js/foundation.util.motion';
import { Nest } from 'foundation-sites/js/foundation.util.nest';
import { Timer } from 'foundation-sites/js/foundation.util.timer';
import { Touch } from 'foundation-sites/js/foundation.util.touch';
import { Triggers } from 'foundation-sites/js/foundation.util.triggers';
import { OffCanvas } from 'foundation-sites/js/foundation.offcanvas';
import { Orbit } from 'foundation-sites/js/foundation.orbit';
import { Reveal } from 'foundation-sites/js/foundation.reveal';
import { Sticky } from 'foundation-sites/js/foundation.sticky';


Foundation.addToJquery($);

// Add Foundation Utils to Foundation global namespace for backwards
// compatibility.

Foundation.rtl = rtl;
Foundation.GetYoDigits = GetYoDigits;
Foundation.transitionend = transitionend;

Foundation.Box = Box;
Foundation.onImagesLoaded = onImagesLoaded;
Foundation.Keyboard = Keyboard;
Foundation.MediaQuery = MediaQuery;
Foundation.Motion = Motion;
Foundation.Move = Move;
Foundation.Nest = Nest;
Foundation.Timer = Timer;

// Touch and Triggers previously were almost purely sede effect driven,
// so no // need to add it to Foundation, just init them.

Touch.init($);

Triggers.init($, Foundation);




Foundation.plugin(OffCanvas, 'OffCanvas');

Foundation.plugin(Orbit, 'Orbit');

Foundation.plugin(Reveal, 'Reveal');

Foundation.plugin(Sticky, 'Sticky');





module.exports = Foundation;
