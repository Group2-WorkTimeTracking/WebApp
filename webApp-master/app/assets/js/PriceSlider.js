$(document).ready(function() {
          $("#slider").slider({
              range: "min",
              animate: true,
              value: 1,
              min: 1,
              max: 1000,
              step: 1,
              slide: function(event, ui) {
                update(1,ui.value); //changed
              }
          });

          //Added, set initial value.
          $("#slider").draggable();
          $("#amount").val(0);
          $("#amount-label").text(0);
          update();
      });

      //changed. now with parameter
      function update(slider,val) {
        //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
        var $amount = slider == 1?val:$("#amount").val();

        /* commented
        $amount = $( "#slider" ).slider( "value" );
        $duration = $( "#slider2" ).slider( "value" );
         */

         $total = "5" * ($amount);
         $( "#amount" ).val($amount);
         $( "#amount-label" ).text($amount);
         $( "#total" ).val($total);
         $( "#total-label" ).text($total);

         $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
      }


