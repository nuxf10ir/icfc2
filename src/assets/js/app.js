import $ from 'jquery';
import 'lightbox2/dist/js/lightbox';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();



$('.page-top')
    .on('sticky.zf.stuckto:top', function(){
        $(this).addClass('shrink');
    })
    .on('sticky.zf.unstuckfrom:top',
        function(){
            $(this).removeClass('shrink');
        });