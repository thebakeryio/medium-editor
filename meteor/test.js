/* globals Tinytest: false, MediumEditor: false */

Tinytest.add('MediumEditor is properly expored', function(test) {
  test.isNotUndefined(MediumEditor, 'MediumEditor is not exported');
});

Tinytest.add('MediumEditor gets properly integrated', function(test) {
  var div = document.createElement('div');
  div.className = '.editable';
  document.body.appendChild(div);

  var editor = new MediumEditor('.editable');

  test.instanceOf(editor, MediumEditor, 'Instantiation OK');
});