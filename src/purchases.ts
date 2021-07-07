import { collection, getFirestore, addDoc } from "firebase/firestore"

const db = getFirestore();

const purchSubmit = document.querySelector('#purchSubmit')
const date: HTMLInputElement = document.querySelector('#purchEntryDate')
const name: HTMLInputElement = document.querySelector('#purchEntryName')
const quantity: HTMLInputElement = document.querySelector('#purchEntryQuantity')
const unit: HTMLInputElement = document.querySelector('#purchEntryUnit')
const price: HTMLInputElement = document.querySelector('#purchEntryPrice')
const branch: HTMLInputElement = document.querySelector('#purchEntryBranch')

function purchEntryCreate() { addDoc(collection(db, "inventory"), {
    date: date.valueAsDate,
    name: name.value,
    quantity: quantity.valueAsNumber,
    unit: unit.value,
    price: price.valueAsNumber,
    branch: branch.value,

  });}

purchSubmit.addEventListener('click', () => {
    purchEntryCreate();
})