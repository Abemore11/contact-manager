/* ========================================
               Data Model Class
   ========================================

   Defines the structure of a CONTACT object.

=========================================== */


export default class Contact {
    constructor(id, firstName, lastName, title, org, favorite, tag, phone, email, street, city, state, zip, notes)
    
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.org = org;
        this.favorite = favorite;
        this.tag = tag;
        this.phone = phone;
        this.email = email;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.notes = notes;
    }
}