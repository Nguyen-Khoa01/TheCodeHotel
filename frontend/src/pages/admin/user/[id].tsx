import { useRouter } from "next/router"

export default function AdminUser(){
        const router = useRouter()
            return(
                    <h1>Admin - User page{router.query.id}</h1>
                    
            )
}


