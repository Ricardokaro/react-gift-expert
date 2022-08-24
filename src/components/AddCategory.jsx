import { useState } from 'react'

export const AddCategory = ( { onNewCAtegory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( { target } ) => {                
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;
        onNewCAtegory( inputValue.trim() ); 
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar Gift"
                value={ inputValue }
                onChange = { onInputChange }
            />
        </form>        
    )
}
