# Getting Started

`styled-components` utilizes tagged template literals to style components.

Example:

```
const Wrapper = styled.section `
    padding: 4em;
    background: white;
`
```

# Adapting based on props

Functions can be passed to a styled components template literal to adapt based on props.

Example:

```
const Button = styled.button`
    background: ${props => props.primary ? "red" : "blue"};
    font-size: 1em;
`
```

# Extending existing styled components

Simply wrap the component in the `styled()` constructor. All styles will be inherited from
the supplied component and any styles defined in the new component, that are also defined in the base component,
will take precedence.

Example:

```
const Button = styled.button`
    background: ${props => props.primary ? "red" : "blue"};
    font-size: 1em;
`

const NewButton = styled(Button) {
    background: green;
}
```

## Using a different tag

In cases where styles for an existing styled component are desired but used with a differen tag, leverage
the `as` prop.

Example:

```
const Button = styled.button`
    background: ${props => props.primary ? "red" : "blue"};
    font-size: 1em;
`

const LinkButton = styled(Button).attrs({
    as: 'link'
})
```
