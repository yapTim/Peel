import { collection, getFirestore, getDocs } from "firebase/firestore"

const db = getFirestore();
const invSnapshot = await getDocs(collection(db, "inventory"));
const invContent: HTMLDivElement = document.querySelector('#invContent');

function renderInvData(doc: any) {

const row: HTMLDivElement = document.createElement('div')
    row.classList.add('row', 'align-middle', 'mx-2', 'peel-invEntry')

const date: HTMLDivElement = document.createElement('div')
    date.classList.add('col-1', 'peel-invEntryItem')
const name: HTMLDivElement = document.createElement('div')
    name.classList.add('col-6', 'peel-invEntryItem')
const quantity: HTMLDivElement = document.createElement('div')
    quantity.classList.add('col-1', 'peel-invEntryItem')
const unit: HTMLDivElement = document.createElement('div')
    unit.classList.add('col-1', 'peel-invEntryItem')
const price: HTMLDivElement = document.createElement('div')
    price.classList.add('col-1', 'peel-invEntryItem')
const total: HTMLDivElement = document.createElement('div')
    total.classList.add('col-1', 'peel-invEntryItem')
const branch: HTMLDivElement = document.createElement('div')
    branch.classList.add('col-1', 'peel-invEntryItem')

    date.innerText = doc.data().date.toDate().toDateString()
    name.innerText = doc.data().name
    quantity.innerText = doc.data().quantity
    unit.innerText = doc.data().unit
    price.innerText = doc.data().price
    branch.innerText = doc.data().branch

    invContent.appendChild(row)
    row.appendChild(date)
    row.appendChild(name)
    row.appendChild(quantity)
    row.appendChild(unit)
    row.appendChild(price)
    row.appendChild(total)
    row.appendChild(branch)

}

invSnapshot.forEach((doc) => {
    renderInvData(doc);
  });
