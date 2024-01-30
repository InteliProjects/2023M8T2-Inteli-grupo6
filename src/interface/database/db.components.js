const { supabase } = require('./db');

const table = 'components';

const getComponents = async (component=null) => {
    if (component) {
        const { data, error } = await supabase.from(table).select().eq('component', component)
        return data;  
    }
    const { data, error } = await supabase.from(table).select()
    return data;
}

const postComponents = async (component, description, quantity) => {
    const { error } = await supabase.from(table).insert([
        {component: component, description: description, quantity: quantity}
    ])
    return error;
}

const updateComponents = async (component, new_description=null, new_quantity=null) => {
    const old_component = await getComponents(component);
    console.log(old_component);
    const old_description = old_component.description;
    const old_quantity = old_component.quantity;

    if (!new_description) new_description = old_description;
    if (!new_quantity) new_quantity = old_quantity;

    const { error } = await supabase.from(table).update([
        {description: new_description, quantity: new_quantity}
    ]).eq('component', component)

    return error;
}

module.exports = {
    getComponents,
    postComponents,
    updateComponents
};