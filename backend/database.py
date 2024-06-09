import sqlite3
conn = sqlite3.connect('employees.db')
cursor = conn.cursor()


create_table_query = '''
CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    avatar TEXT
);
'''

create_skills_table_query = '''
CREATE TABLE IF NOT EXISTS skills (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id INTEGER,
    skill TEXT NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees (id)
);
'''


cursor.execute(create_skills_table_query)
cursor.execute(create_table_query)
conn.commit()
conn.close()

def insert_skill(employee_id, skill):
    conn = sqlite3.connect('employees.db')
    cursor = conn.cursor()
    insert_query = '''
    INSERT INTO skills (employee_id, skill)
    VALUES (?, ?);
    '''
    cursor.execute(insert_query, (employee_id, skill))
    conn.commit()
    conn.close()

def insert_employee(name, position, avatar):
    conn = sqlite3.connect('employees.db')
    cursor = conn.cursor()
    insert_query = '''
    INSERT INTO employees (name, position, avatar)
    VALUES (?, ?, ?);
    '''
    cursor.execute(insert_query, (name, position, avatar))
    conn.commit()
    conn.close()

insert_employee("John Doe", "Software Engineer", "path/to/avatar.jpg")
insert_skill(1, "Python")
insert_skill(1, "SQL")
insert_skill(1, "JavaScript")
insert_skill(1, "React")
insert_skill(1, "Next.js")