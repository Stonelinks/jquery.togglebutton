// toggle-button plugin
// use it like this
// <button name="taskparameters[startfromcurrent]" class="mujin-toggle-button" data-true="True" data-true-text="Enabled" data-false="False" data-false-text="Disabled" value="<%= taskparameters.startfromcurrent %>"></button>

(function($) {

  var ToggleButton = function(element, data) {
    this.element = $(element);
    $.extend(this, data);

    this.shadow = $("<input type='hidden'>").attr({
      name: this.element.attr('name'),
      value: this.element.val()
    });
    this.shadow.insertAfter(this.element);

    var _this = this;
    this.element.on('click', function(e) {
      _this.toggle();
      e.preventDefault();
    });

    // find initial state
    this.state = undefined;
    if (this.true == this.element.val()) {
      this.state = true;
    }
    else if (this.false == this.element.val()) {
      this.state = false;
    }
    else {

      // default to false
      this.state = false;
    }
    this.syncToDOM();
  };

  ToggleButton.prototype = {

    constructor: ToggleButton,

    syncToDOM: function() {
      if (this.state == true) {
        this.element.html(this.trueText);
        this.element.val(this.true);
        this.shadow.val(this.true);
        // this.element.addClass('btn-success');
        // this.element.removeClass('btn-danger');
      }
      else {
        this.element.html(this.falseText);
        this.element.val(this.false);
        this.shadow.val(this.false);
        // this.element.removeClass('btn-success');
        // this.element.addClass('btn-danger');
      }
    },

    toggle: function() {
      var $this = this.element;
      this.state = !this.state;
      this.syncToDOM();
      this.element.change();
      this.shadow.change();
    }
  };

  $.fn.toggleButton = function(option) {
    return this.each(function() {
      var $this = $(this);
      var data = $.extend({}, {
        true: 'True',
        trueText: '<i class="fa fa-check-square-o"></i>',
        false: 'False',
        falseText: '<i class="fa fa-square-o"></i>'
      }, $this.data());
      var tb = $this.data('toggle-button');
      if (!tb) {
        $this.data('toggle-button', (tb = new ToggleButton(this, data)));
      }
      if (typeof option == 'string') {
        tb[option]();
      }
    });
  };

  $.fn.toggleButton.Constructor = ToggleButton;

})(jQuery);
