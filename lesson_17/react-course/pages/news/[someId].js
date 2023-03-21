import { useRouter } from 'next/router'

function PageDetail() {

    const router = useRouter();
    console.log(router.query.someId)
    return <h1>PageDetail</h1>
}

export default PageDetail;