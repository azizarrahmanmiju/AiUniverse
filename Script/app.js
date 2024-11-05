const LoadAlldata = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    const alldata = data.data.tools;
    console.log(alldata);
    showInDisplay();

}

const showInDisplay = () => {
    const universContainer = document.getElementById('universe-container');
    universContainer.innerHTML =
        `
     <h1 class="text-2xl font-bold">HI</h1>
    `
}




//=====RUNTIME Exicute===========================?
LoadAlldata();