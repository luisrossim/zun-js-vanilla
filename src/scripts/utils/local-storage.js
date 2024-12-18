export function saveItemsLocalStorage(key, value){
    let stringValue = JSON.stringify(value);
    localStorage.setItem(key, stringValue);
}

export function getItemsLocalStorage(key){
    let value = JSON.parse(localStorage.getItem(key));
    return value;
}

export function removeItemsLocalStorage(key){
    localStorage.removeItem(key);
}