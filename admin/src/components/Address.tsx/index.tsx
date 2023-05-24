import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api'
import { Input } from 'antd'
import React, { useRef, useState } from 'react'

const Address = () => {

    const inputRef = useRef<any>()
    const [nameCity, setNameCity] = useState('')

    const onPlacesChanged = () => {
        const [place] = inputRef.current.getPlaces()

        if (place) {
            console.log(place.formatted_address)
            setNameCity(place.formatted_address)
            console.log(place.geometry.location.lat())
            console.log(place.geometry.location.lng())
        }
    };
    const onSBLoad = (ref: any) => {
        inputRef.current = ref
    };
    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_MAP_ID}
            libraries={['places']}
        >
            <StandaloneSearchBox
                onPlacesChanged={onPlacesChanged}
                onLoad={onSBLoad}
            >
                <Input value={nameCity} onChange={(e) => setNameCity(e.target.value)} />
            </StandaloneSearchBox>

        </LoadScript>

    )
}

export default Address
