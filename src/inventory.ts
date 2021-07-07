import { deleteDoc, collection, getFirestore, getDocs, DocumentReference, doc } from "firebase/firestore"

const db = getFirestore();

const invSnapshot = await getDocs(collection(db, "inventory"));

const invContent: HTMLDivElement = document.querySelector('#invContent');
const invEditBtn: HTMLButtonElement = document.querySelector('#invEditBtn')
const invDeleteBtn: HTMLButtonElement = document.querySelector('#invDeleteBtn')


// Display 'inventory' database documents in table form
function renderInvData(doc: any) {

    const row: HTMLDivElement = document.createElement('div')
    row.classList.add('row', 'align-middle', 'mx-2', 'peel-invEntry',)
    row.setAttribute('data-id', doc.id)

    const date: HTMLDivElement = document.createElement('div')
    date.classList.add('col-2', 'peel-invEntryItem')
    const name: HTMLDivElement = document.createElement('div')
    name.classList.add('col-4', 'peel-invEntryItem')
    const quantity: HTMLDivElement = document.createElement('div')
    quantity.classList.add('col-1', 'peel-invEntryItem')
    const unit: HTMLDivElement = document.createElement('div')
    unit.classList.add('col-1', 'peel-invEntryItem')
    const price: HTMLDivElement = document.createElement('div')
    price.classList.add('col-1', 'peel-invEntryItem')
    const total: HTMLDivElement = document.createElement('div')
    total.classList.add('col-1', 'peel-invEntryItem')
    const branch: HTMLDivElement = document.createElement('div')
    branch.classList.add('col-2', 'peel-invEntryItem')

    function funcTotal() {
        return (doc.data().quantity) * (doc.data().price)
    }

    date.innerText = doc.data().date.toDate().toDateString()
    name.innerText = doc.data().name
    quantity.innerText = doc.data().quantity
    unit.innerText = doc.data().unit
    price.innerText = `₱ ${doc.data().price}`
    total.innerText = `₱ ${funcTotal()}`
    branch.innerText = doc.data().branch

    invContent.appendChild(row)
    row.appendChild(date)
    row.appendChild(name)
    row.appendChild(quantity)
    row.appendChild(unit)
    row.appendChild(price)
    row.appendChild(total)
    row.appendChild(branch)

    // Edit document functionality
    invEditBtn.addEventListener('click', () => {
        row.classList.toggle('peel-invEdit')
    });
    // Delete document functionality
    invDeleteBtn.addEventListener('click', () => {
        row.classList.toggle('peel-invDelete');
        row.addEventListener('click', async (e) => {
            const dataID: string = e.path[1].dataset.id;
            const docRef: DocumentReference = docGet(dataID)
            console.log(dataID);
            await deleteDoc(docRef);
            console.log(e)
            location.reload()
        })
    })


}



invSnapshot.forEach((doc) => {
    renderInvData(doc);
    console.log(doc.id)

});



function docGet(dataID: string) {
    return doc(db, 'inventory', dataID)
}

console.log(document.querySelector('.peel-invEntry'));


