

export default {
    host: "https://localhost:44306/api/0825d87ccc1048dca30feaf899c6ba22",
    appkey:"0825d87ccc1048dca30feaf899c6ba22",
    token(){
        return `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJuaWNrIjoi5aKo5a6J6buYIiwiYXZhdGFyIjoiZGVmYXVsdCIsImV4cGlyZSI6MTU2NzYwOTQzODczODU1MzYuMCwic2V4IjowLjAsImlkIjoiZmRmMmJjYWEtMDQ5Zi00ZmMxLThkMWItZTRkMmE0M2I5OWJjIn0.bHXxYIkVY9wP_Je7Md0Q6_jl2txD-V9UKspKr9Fn9g4TA5c1Qdqb9InhPIh-D6p4gcxveNattOyk4gxHKLWjYQ`;
    },
    refererToken(){
        return "";
    },
    acceptLoginPage:'http://localhost:8080/accept/login?'
}