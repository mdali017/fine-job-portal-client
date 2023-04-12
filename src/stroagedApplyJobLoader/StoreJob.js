import { getShoppingCart } from "../utilities/fakedb";

const storeProductLoader = async() =>{
      const loadedJobs = await fetch('fakeData.json')
      const jobs = await loadedJobs.json();
      // console.log(jobs)


      const storedJobs = getShoppingCart()
            // console.log(storedJobs)

      const savedJobs = []

      for(const id in storedJobs){
          const addedJobs = jobs.find(job => job.id === id)
          if(addedJobs){
            const quantity = storedJobs[id]
            addedJobs.quantity = quantity;
            savedJobs.push(addedJobs);
          }
      }

      return savedJobs;
}

export default storeProductLoader;