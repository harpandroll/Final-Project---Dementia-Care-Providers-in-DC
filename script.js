//Cached User Interface (UI) Variables
const button = document.querySelector('button')
const wardInput = document.querySelector('input')
const organizationInfo = document.querySelector('#organizationName')
const servicesProvided = document.querySelector('#categoriesofServices')
const address = document.querySelector('#address_full')
const phone = document.querySelector('#phoneNumber')
const websiteAddress = document.querySelector('#webSite')
const eligibleRecipients = document.querySelector('#servicesProvidedfor')

//Event Handlers
button.addEventListener('click', async () => {
    
//Call the District of Columbia Dementia Care Providers API

const response = await axios.get(
    'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Health_WebMercator/MapServer/16/query?where=1%3D1&outFields=*&outSR=4326&f=json',
//)
{

    params: {
        MAR_WARD: wardInput.value
    }
 })
 organizationInfo.textContent = response.data.features.attributes
//Note features in the JSON is an array
 organizationInfo.textContent = response.data.features[0].attributes.ORGANIZATION
 servicesProvided.textContent = response.data.features[0].attributes.CATEGORIES_OF_SERVICE
 phone.textContent = response.data.features[0].attributes.PHONE
 address.textContent = response.data.features[0].attributes.FULL_ADDRESS
 websiteAddress.textContent = response.data.features[0].attributes.WEBSITE
 eligibleRecipients.textContent = response.data.features[0].attributes.SERVICE_AVAILABLE_TO
 

    
})