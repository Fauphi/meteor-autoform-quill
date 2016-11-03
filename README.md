# meteor-autoform-quill
Quill editor for Meteor-Autoform.

## Features

* Quill editor v1.1.3 ([quilljs.com](http://quilljs.com))

## Usage

#### Install
```
meteor add fauphi:meteor-autoform-quill
```
#### Simple Schema / Autoform
```
Blog.attachSchema(new SimpleSchema({
    content: {
        type: String,
        label: "Content",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'quilleditor'
            }
        }
    }
}));

{{> quickForm collection="Blog" type="insert"}}
```

## Todos

* Custom settings for editor
* Styling
