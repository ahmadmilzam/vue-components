// DROPDOWN HANDLER
;(function() {
  'use strict';

  function Dropdown() {
    this.dropdownToggleClass = '.js-dropdown-toggle';
    this.bindEvents();
  }

  Dropdown.prototype.bindEvents = function bindEvents() {
    $(document).on('click.toggle.drop', function(event) {
      if ($(event.target).closest('.js-dropdown').length == 0) {
        clearDrop();
      }
    })
    .on('click.toggle.drop', dropdownToggle, toggleDrop);
  };

  Dropdown.prototype.clearDrop = function clearDrop() {
    $(dropdownToggle).each(function () {
      var $this = $(this),
          $parent = $this.closest('.js-dropdown');

      if (!$parent.hasClass('is-open')) return;

      $parent.removeClass('is-open');
    });

    return false;
  };

  Dropdown.prototype.toggleDrop = function clearDrop() {
    var $this = $(e.target),
      $parent = $this.closest('.js-dropdown'),
      isActive = $parent.hasClass('is-open');

    clearDrop();

    if (!isActive) {
      $parent.toggleClass('is-open');
    }
    return false;
  };
}());
