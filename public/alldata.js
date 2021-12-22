function AllData(){
    const [data, setData] = React.useState('');    

    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));                
            });

    }, []);

    
return (
        <>
 <h5>All Data in Store:</h5>
         {data}
         </>);

        
        
        
        //buildTable(data)
//function buildTable({data}){
  //const table = document.getElementById('myTable')
  //for (const i = 0; i < data.lenght; i++) {
    //  const row = `<tr>
      //                    <td>${data[i].name}</td>
        //                  <td>${data[i].email}</td>
          //                <td>${data[i].password}</td>
            //              <td>${data[i].balance}</td>
              //    </tr>`
      //table.innerHTML += row
  //}
}


  //return (<>
    //  <table className="table table-striped">
     // <tr className="bg-info">
       //   <th>Name</th>
         // <th>Email</th>
          //<th>Password</th>
          //<th>Balance</th>
      //</tr>
        //  <tbody id="myTable">

         // </tbody>
      //</table>
      

  //</>);



//}
        
       //function AllData(){
          //  const ctx = React.useContext(UserContext);
            //return (
              //  <>
                //    <h5>All Data In Store</h5>
                  //  {JSON.stringify(ctx)}<br/>
                //</>
            //);
        //}