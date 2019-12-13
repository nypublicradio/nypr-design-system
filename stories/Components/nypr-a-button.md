# Button

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed magna tincidunt, vehicula elit a, viverra nulla. Morbi eget magna sit amet leo facilisis suscipit. Integer malesuada scelerisque sollicitudin. 

## Usage

### How to Use

Fusce id gravida ante. Maecenas in enim non diam venenatis vehicula et eu magna. Vestibulum ut consequat augue. Nunc molestie aliquam placerat.

### Variant Classes

- `o-button--c-quaternary`
- `o-button--sm`
- `o-button--extra`

### Tips

- Fusce id gravida ante.
- Maecenas in enim non diam venenatis vehicula et eu magna.
- Vestibulum ut consequat augue. 
- Nunc molestie aliquam placerat.

## Code

### Properties

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| blank | `Boolean` | `false` |  Make this a plain, unstyled button. Useful for wrapping icons |
| onclick | `Function` |  | Specify a click handler |
| role | `String` | `'button'` | Specify the `role` attribute. |
| text | `String` | `null` | Text for element contents |
| tier |  | `null` | Which tier in the visual heirarchy this button should be. |
| type | `String` | `button` |  Specify the `type` attribute for the button. |
| url | `String` |  |   External URL |
| route | `Array` |  |    Route arguments for `link-to` component. |



##Example
  
```js
<NyprAButton  @onclick={{action}}>
    Click Here
</NyprAButton>
```



