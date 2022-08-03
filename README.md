# Uso de los Hooks

## Use state

el set state se pued destrucutra porque es un objeto

`const [{ counter1, counter2 }, setCounter] = useState({ counter1: 10, counter2: 20, });`

esto es una propiedad compuatada para reutilizar el mismo onchange se usa la siguiente notacion de los corchetes

```
 const handleInputChange = (e) => {
     setFormState({ ...formState, [e.target.name]: e.target.value });
     };

```
