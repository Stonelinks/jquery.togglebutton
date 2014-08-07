jquery.togglebutton
===================

A quick and dirty toggle button plugin. See it in action [here](http://stonelinks.github.io/jquery.togglebutton/example.html).

##I hate checkboxes

**From a UI standpoint** I think they're ugly, small (therefore hard to click) and hard to write CSS for. **From a developer standpoint** they kind of suck since you need to use the `checked` attribute to get/set the value of the checkbox. The `value` attribute on other input elements is easier to use and more standard across different (but not all) input types. Finally, you need to label them if you want axillary text to annotate them. Why does a simple input element that only needs to represent true-false information suck so much?

##What this does

This small plugin attempts to make check boxes (or any boolean input data) look nice and is friendly to developers. What it does is use bootstrap and font awesome to turn an ordinary button into a nice looking toggle-able boolean button or checkbox. It also creates and updates a hidden input element in the DOM that is much easier to read / write values than a standard checkbox.

##How to use

In your html somewhere, put a button like this:

```html
<button class="btn btn-default" value="True" data-true-text="I'm true" data-false-text="I'm false">
</button>
```

and somewhere else in javascript call

```javascript
$('button').toggleButton()
```

You can pass in options as data attributes or as properties in an object to `toggleButton()`. By default the button makes itself look like a checkbox with the true and false values set to "True" and "False" respectively.

Option | Default | Description
------------- | ------------- | -------------
true  | `"True"` | true value
true-text  | `"<i class="fa fa-check-square-o"></i>"` | text to display when button is in true state
false  | `"False"` | false value
false-text  | `"<i class="fa fa-square-o"></i>"` | text to display when button is in false state
