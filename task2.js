
const awaitCall = async() => {
    try{
        const response = await fetchData()
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.error("Opps something went wron", error)
    }
}

awaitCall();