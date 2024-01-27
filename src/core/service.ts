import axios from 'axios';
import {Layout} from "@/interfaces/layout.interface";
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjlmZGRiYzIxM2ViMjA3ODI4ODZmYjU5ZmM3MWUzZTc4MTBjMTA4YjEyMjVmNWYyMmJlYmFjNTljMjY1YjljMDk1NzViMDVlNmE0MGUxNjIiLCJpYXQiOjE3MDM3MTM4MjMsIm5iZiI6MTcwMzcxMzgyMywiZXhwIjoxNzM1MzM2MjIzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.dXFMPiUsWuTTiOWcCBf118l7oFMj_XdlZZe6vhj3FOpfNpB-Kk36EynCwChn923o5LiAikj5JZ3RXhgZ3-Id2FqRtHrt4aSz-q-PsqLRHFYJsvuewpgbiiMEUuxFeJu_h4Uu-qvKme2vjzpBQgLmoBW6Q61wt6Tl9cWzxktF3tHsCIqLCyA_Cl0kuuWRwYFkS0s72zyRVvsgrZi3g39FEqtAjQ3VHwVSYPIm5Ppof8qkav5inNn_lhPK-tF9H2MOgnuxZKkmqnLow9XNeKImQSYUyXPihli5Mp9I0lwaJdrnctEUlY5BiI0GZgS8Nm-_rGQa_E1C1ka2keF7SDSK-wrIXnXOhUUdmcpKA96q1M_088lwwif0-x3B8-Uht7zSxIgJuc-C2lSbZRmQmpzJcyYiOuZpKpKKKWJalObZ2ZCfjyaWSKlp0sRUoaw5RAV9AlFBcn2Zk6zOqArcKdNtZ-Fki6ZQWUiStp0eUuGGYS7e184a1Z1N9Du0dBU_zEuMgaO7YruwgSdk4FmyHry5JST6Owt2bQqEZmqk4gr0Bw25S7jhcNJR_hn8ObEaM-gdVBdBKNleexjQK_MfW6ghtFjEnXN-NRc1RrPIrTBrtKuDPXjz2kdVv-AriS-eo3fWnUx48mo-ihWPbZa8pKdNX7w3_BIpmruJoe0VJSdMShE'

export interface AxiosLayout {
  data: Layout
}
export const getLayout = (url: string) =>
  axios.get<AxiosLayout>(`${url}`, { headers: { 'Authorization': 'Bearer ' + token } }).then(res => res.data.data)

export const getEntityData = (url: string, params= {}) =>
  axios.get(`${url}`, { ...params }).then(res => res.data.data)
