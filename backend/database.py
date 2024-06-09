import sqlite3
conn = sqlite3.connect('employees.db')
cursor = conn.cursor()


create_employee_table = '''
CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    avatar TEXT
);
'''

cursor.execute(create_employee_table)

create_skills_table = '''
CREATE TABLE IF NOT EXISTS skills (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id INTEGER,
    skill TEXT NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees (id)
);
'''



cursor.execute(create_skills_table)



def insert_skill(employee_id, skill):
    conn = sqlite3.connect('employees.db')
    cursor = conn.cursor()
    insert_query = '''
    INSERT INTO skills (employee_id, skill)
    VALUES (?, ?);
    '''
    cursor.execute(insert_query, (employee_id, skill))
    conn.commit()
    

def insert_employee(name, position, avatar):
    conn = sqlite3.connect('employees.db')
    cursor = conn.cursor()
    insert_query = '''
    INSERT INTO employees (name, position, avatar)
    VALUES (?, ?, ?);
    '''
    cursor.execute(insert_query, (name, position, avatar))
    conn.commit()
    

insert_employee("John Doe", "Software Engineer", "/avatarfolder/avatar.png")
insert_skill(1, "Python")
insert_skill(1, "SQL")
insert_skill(1, "JavaScript")
insert_skill(1, "React")
insert_skill(1, "Next.js")


conn.close()