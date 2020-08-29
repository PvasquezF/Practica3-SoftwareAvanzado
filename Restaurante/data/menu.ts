import { v4 } from "https://deno.land/std/uuid/mod.ts";

export interface menu {
    id: string,
    description: string,
    price: number,
    created_at: Date
}

export const menus: Array<menu> = [
    {
      id: "b05a46ec-3327-4926-9488-4272c7fa330f",
      description: "Menu 1",
      price: 135,
      created_at: new Date("2020-08-29T00:31:41.135Z")       
    },
    {
      id: "c8244a18-a900-4b8c-a47f-47f89310a4e8",
      description: "Menu 2",
      price: 338,
      created_at: new Date("2020-08-29T00:31:41.135Z")
    },
    {
      id: "a2983cc4-7933-461a-b47d-8009f6e14b73",
      description: "Menu 3",
      price: 431,
      created_at: new Date("2020-08-29T00:31:41.135Z")
    },
    {
      id: "7873bb89-3374-4551-8e9a-2ff5dcc4c361",
      description: "Menu 4",
      price: 124,
      created_at: new Date("2020-08-29T00:31:41.136Z")
    },
    {
      id: "db21c84f-c9be-4b49-9a9b-e29cb250b4c6",
      description: "Menu 5",
      price: 210,
      created_at: new Date("2020-08-29T00:31:41.136Z")
    },
    {
      id: "dddb1c77-bda0-4a42-a708-b4ef80f498ff",
      description: "Menu 6",
      price: 371,
      created_at: new Date("2020-08-29T00:31:41.136Z")
    },
    {
      id: "01186d0c-a2f1-410d-9c6d-c4503583da93",
      description: "Menu 7",
      price: 162,
      created_at: new Date("2020-08-29T00:31:41.136Z")
    },
    {
      id: "093f64be-98e7-4948-88e8-50be71d80d49",
      description: "Menu 8",
      price: 444,
      created_at: new Date("2020-08-29T00:31:41.136Z")
    },
    {
      id: "5bae0ce6-146a-482c-9fa8-9ee674142bce",
      description: "Menu 9",
      price: 225,
      created_at: new Date("2020-08-29T00:31:41.136Z")
    },
    {
      id: "77bcffc8-be30-4db6-af94-0b54fad79671",
      description: "Menu 10",
      price: 12,
      created_at: new Date("2020-08-29T00:31:41.136Z")
    },
    {
      id: "b2d66c94-47aa-4854-a61c-4d0f4485d6db",
      description: "Menu 11",
      price: 48,
      created_at: new Date("2020-08-29T00:31:41.136Z")
    },
    {
      id: "c9238cfe-5d88-4d9d-8521-ab68b146c1a4",
      description: "Menu 12",
      price: 72,
      created_at: new Date("2020-08-29T00:31:41.136Z")
    },
    {
      id: "2687a070-36a7-4134-b768-ec30e13d16fa",
      description: "Menu 13",
      price: 170,
      created_at: new Date("2020-08-29T00:31:41.136Z")
    },
    {
      id: "f68356d7-d24c-4116-acb8-674e41610fcb",
      description: "Menu 14",
      price: 409,
      created_at: new Date("2020-08-29T00:31:41.136Z")
    },
    {
      id: "d3edbecc-6fd2-4e5c-bc87-78cc31b2d45c",
      description: "Menu 15",
      price: 460,
      created_at: new Date("2020-08-29T00:31:41.136Z")
    },
    {
      id: "6e6a5490-c36b-4251-acbf-b46d2efb6f4e",
      description: "Menu 16",
      price: 161,
      created_at: new Date("2020-08-29T00:31:41.136Z")
    },
    {
      id: "5a4354e3-2591-48a9-bfdb-6f4a5680aa0b",
      description: "Menu 17",
      price: 202,
      created_at: new Date("2020-08-29T00:31:41.136Z")
    },
    {
      id: "8e19484c-51fd-4884-b1b4-f4f99ee3649f",
      description: "Menu 18",
      price: 460,
      created_at: new Date("2020-08-29T00:31:41.136Z")
    },
    {
      id: "70a2658c-563f-43cd-b73f-8a5b9be379b1",
      description: "Menu 19",
      price: 39,
      created_at: new Date("2020-08-29T00:31:41.136Z")
    },
    {
      id: "d3fd8aea-770d-44d2-86af-2337ff229bae",
      description: "Menu 20",
      price: 291,
      created_at: new Date("2020-08-29T00:31:41.136Z")
    }
  ];
// const min = 10;
// const max = 500;
// for (let i = 0; i < 20; i++) {
//     menus.push({
//         id: v4.generate(),
//         description: `Menu ${i+1}`,
//         price: Math.floor(Math.random() * (max - min)) + min,
//         created_at: new Date()
//     })
// }