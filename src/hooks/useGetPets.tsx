import { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';

type DisplayPet = {
    petId: string;
    name: string;
    species: string;
    age: string;
    dateEntered: string;
    image: string;
};

// This custom hook fetches pet data from the Amplify backend and puts it in component state
// On success, it returns an array of available pet data 
// On error, it imperatively navigates to the error route, passing in the 
export default function useGetPets() {
    const [pets, _setPets] = useState<DisplayPet[]>([]);
   // const _navigate = useNavigate();

    useEffect(() => {
        async function getPets() {
            console.log("Not implemented yet");
        }

        getPets();

    }, [])

    return pets;
}