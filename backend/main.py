from fastapi import FastAPI
import sqlite3

app = FastAPI()

def get_employee(employee_id):
    conn = sqlite3.connect('employees.db')
    cursor = conn.cursor()
    query = '''
    SELECT * FROM employees WHERE id = ?;
    '''
    cursor.execute(query, (employee_id,))
    employee = cursor.fetchone()
    conn.close()
    return employee


def get_employee_skills(employee_id):
    conn = sqlite3.connect('employees.db')
    cursor = conn.cursor()
    query = '''
    SELECT skill FROM skills WHERE employee_id = ?;
    '''
    cursor.execute(query, (employee_id,))
    skills = cursor.fetchall()
    conn.close()
    return [skill[0] for skill in skills]



@app.get("/employees/{employee_id}")
def get_employee_endpoint(employee_id: int):
    employee = get_employee(employee_id)
    if employee:
        return {"id": employee[0], "name": employee[1], "position": employee[2], "avatar": employee[3]}
    else:
        return {"message": "Employee not found"}

@app.get("/employees/{employee_id}/skills")
def get_employee_skills_endpoint(employee_id: int):
    skills = get_employee_skills(employee_id)
    return {"skills": skills}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)