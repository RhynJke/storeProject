
// function submitData() {
//   const entryProdId = document.querySelector('.entry_prodId').value;
//   const entryName = document.querySelector('.entry_name').value;
//   const entryInvent = document.querySelector('.entry_invent').value;
//   const entryWholesale = document.querySelector('.entry_wholesale').value;
//   const entryNumWholesale = document.querySelector('.entry_numofWholesale').value;
//   const entryRetail = document.querySelector('.entry_Retail').value;
//   const entryNumRetail = document.querySelector('.entry_numofRetail').value;

//   // Check if all fields are filled
//   if (entryProdId === null || entryName === null || entryInvent === null || entryWholesale === null || entryNumWholesale === null || entryRetail === null || entryNumRetail === null) {
//     alert('Please fill in all fields');
//     return;
//   }

//   // Add data to the inventory
//   inventory.addItem(entryProdId, entryName, entryInvent, entryWholesale, entryNumWholesale, entryRetail, entryNumRetail);

//   // Display the inventory after adding the item
//   //inventory.displayInventory();
// }

// // Assuming the DataEntry and Inventory classes are defined the same way as before
// class DataEntry {
//   constructor(id, name, investment, wholesale, numOfWholesale, retail, numOfRetail) {
//     this.id = id;
//     this.name = name;
//     this.investment = investment;
//     this.wholesale = wholesale;
//     this.numOfWholesale = numOfWholesale;
//     this.retail = retail;
//     this.numOfRetail = numOfRetail;
//   }
// }

// class Inventory {
//   constructor() {
//     this.inventoryList = [];
//   }

//   addItem(id, name, invest, wsale, numOfWsale, retail, numOfRetail) {
//     const stocks = this.inventoryList.some(stocks => stocks.id === id);
//     if (stocks) {
//       alert('This product already exists!!');
//     } else {
//       const newDataEntry = new DataEntry(id, name, invest, wsale, numOfWsale, retail, numOfRetail);
//       this.inventoryList.push(newDataEntry);
//     }
//   }

//   displayInventory() {
//     this.inventoryList.forEach(item => {
//       console.log(`ID#: ${item.id}`);
//     });
//   }
// }

// const inventory = new Inventory();
// inventory.displayInventory();

// const btnsumbit = document.getElementsByClassName('button_submit_inven');

// function submitData() {
//   // Retrieve input values'
//   const entryProdId = document.querySelector('.entry_prodId').value;
//   const entryName = document.querySelector('.entry_name').value;
//   const entryInvent = document.querySelector('.entry_invest').value;
//   const entryWholesale = document.querySelector('.entry_wholesale').value;
//   const entryNumWholesale = document.querySelector('.entry_numofWholesale').value;
//   const entryRetail = document.querySelector('.entry_Retail').value;
//   const entryNumRetail = document.querySelector('.entry_numofRetail').value;

//   // Check if all fields are filled
//   if (entryProdId === "" || entryName === "" || entryInvent === "" || entryWholesale === "" || entryNumWholesale === "" || entryRetail === "" || entryNumRetail === "") {
//     alert('Please fill in all fields');
//     return;
//   }

//   // Add data to the inventory
//   inventory.addItem(entryProdId, entryName, entryInvent, entryWholesale, entryNumWholesale, entryRetail, entryNumRetail);

//   // Display the updated inventory
//   inventory.displayInventory();
// }

   const entryProdId = document.getElementById('entry_prodId');
   const entryName = document.getElementById('entry_name');
   const entryInvent = document.getElementById('entry_invest');
   const entryWholesale = document.getElementById('entry_wholesale');
   const entryNumWholesale = document.getElementById('.entry_numofWholesale');
   const entryRetail = document.getElementById('entry_Retail');
   const entryNumRetail = document.getElementById('entry_numofRetail'); 
   const btnSave = document.getElementById('button_submit_inven'); 
  
   function submitData(){
    inventory.addItem(entryProdId, entryName, entryInvent, entryWholesale, entryNumWholesale, entryRetail, entryNumRetail);
  }

  //btnSave.addEventListener(click , submitData);

class DataEntry {
  constructor(id, name, investment, wholesale, numOfWholesale, retail, numOfRetail) {
    this.id = id;
    this.name = name;
    this.investment = investment;
    this.wholesale = wholesale;
    this.numOfWholesale = numOfWholesale;
    this.retail = retail;
    this.numOfRetail = numOfRetail;
  }
}

class Inventory {
  constructor() {
    this.inventoryList = [];
  }

  addItem(id, name, invest, wsale, numOfWsale, retail, numOfRetail) {
    const stocks = this.inventoryList.some(stock => stock.id === id);
    if (stocks) {
      alert('This product already exists!!');
    } else {
      const newDataEntry = new DataEntry(id, name, invest, wsale, numOfWsale, retail, numOfRetail);
      this.inventoryList.push(newDataEntry);
    }
  }

  displayInventory() {
    console.log('Inventory List:', this.inventoryList);
    this.inventoryList.forEach(item => {
      console.log(`ID#: ${item.id}, Name: ${item.name}, Investment: ${item.investment}`);
    });
  }
}

// Initialize the inventory
const inventory = new Inventory();
inventory.displayInventory();