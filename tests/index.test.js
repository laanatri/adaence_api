import request from "supertest";
import { app, elders } from "../index.js";
import { describe, test, expect, beforeEach } from "vitest";

const jack = {
    firstname: "Jack",
    age: 90,
    job: "gardien",
    city: "Saint lubin des joncherets",
    zipcode: "28350",
    description: "Je garde la maison",
    imageUrl: "/images/jack-ClHY-KyvI1M-unsplash.jpg",
    type: "Un repas",
};

beforeEach(() => {
    elders.length = 0;
    elders.push({...jack}); // fait une copie de jack et non une ref à jack, évite les effets de bord
});

describe("elders routes", () => {
    test("POST /elder add new elder", async () => {
        const newElder = {
            firstname: "Soares",
            age: 84,
            job: "Puéricultrice",
            city: "Angers",
            zipcode: "49000",
            description: "Soares a consacré sa vie aux tout-petits.",
            imageUrl: "/images/soares.jpg",
            type: "Un café/thé",
        };
        const response = await request(app).post("/elder").send(newElder).expect(201);
        expect(response.body.firstname).toBe("Soares");
        expect(elders.length).toBe(2);
    })

    test("GET /elder return all elders", async () => {
        const response = await request(app).get("/elder").expect(200);
        expect(Array.isArray(response.body.elders)).toBe(true);
        expect(response.body.elders).toBeDefined();
        expect(response.body.elders.length).toBe(1);
        expect(response.body.elders[0].firstname).toBe("Jack");
    })

    test("GET /elder/search filter elders by type and city", async () => {
        const response = await request(app).get("/elder/search").query({type: "un repas", city: "saint lubin"}).expect(200);
        expect(Array.isArray(response.body)).toBe(true);
        response.body.forEach((elder) => {
            expect(elder.type.toLowerCase()).toBe("un repas");
            expect(elder.city.toLowerCase()).toContain("saint lubin")
        })
    })

    test("PUT /elder/:firstname update the elder", async () => {
        const updatedData = {
            age: 91,
            job: "dessinateur"
        }
        const response = await request(app).put("/elder/Jack").send(updatedData).expect(200);
        expect(response.body.age).toBe(updatedData.age);
        expect(response.body.job).toBe(updatedData.job);
    })

    test("PUT /elder/:firstname return 404 error elder not exist", async () => {
        const updatedData = {
            age: 80
        }
        await request(app).put("/elder/lalilolu").send(updatedData).expect(404);
    })

    test("DELETE /elder/:firstname delete the elder", async () => {
        const response = await request(app).delete("/elder/Jack").expect(200);
        expect(response.body[0].firstname).toBe("Jack");
    })

    test("DELETE /elder/:firstname return 404 error elder not exist", async () => {
        await request(app).delete("/elder/lalilolu").expect(404);
    })

})