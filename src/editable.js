/**
 * @author  Mahesh Sankhala
 */

 (function() {
   if (document.body.contentEditable === 'false' || document.body.contentEditable === 'inherit') {
     document.body.contentEditable = 'true'; document.designMode='on';
   } else {
     document.body.contentEditable = 'false'; document.designMode='off';
   }
 })();
