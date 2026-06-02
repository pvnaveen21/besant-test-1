import { type ChangeEvent, type FormEvent, useState } from "react"

type User = {
    id: number
    name: string
    email: string
    role: string
}

type FormState = Omit<User, "id">

const emptyForm: FormState = {
    name: "",
    email: "",
    role: "",
}

const initialUsers: User[] = [
    { id: 1, name: "Naveen", email: "naveen@example.com", role: "Admin" },
    { id: 2, name: "Priya", email: "priya@example.com", role: "Developer" },
]

function CrudOperations() {
    const [users, setUsers] = useState<User[]>(initialUsers)
    const [form, setForm] = useState<FormState>(emptyForm)
    const [editingId, setEditingId] = useState<number | null>(null)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setForm((previousForm) => ({
            ...previousForm,
            [name]: value,
        }))
    }

    const resetForm = () => {
        setForm(emptyForm)
        setEditingId(null)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!form.name.trim() || !form.email.trim() || !form.role.trim()) {
            return
        }

        if (editingId) {
            setUsers((previousUsers) =>
                previousUsers.map((user) =>
                    user.id === editingId ? { ...user, ...form } : user
                )
            )
            resetForm()
            return
        }

        setUsers((previousUsers) => [
            ...previousUsers,
            {
                id: Date.now(),
                ...form,
            },
        ])
        resetForm()
    }

    const handleEdit = (user: User) => {
        setForm({
            name: user.name,
            email: user.email,
            role: user.role,
        })
        setEditingId(user.id)
    }

    const handleDelete = (id: number) => {
        setUsers((previousUsers) => previousUsers.filter((user) => user.id !== id))

        if (editingId === id) {
            resetForm()
        }
    }

    return (
        <div className="container mt-4">
            <h1>CRUD Operation</h1>

            <form className="row g-3 mb-4" onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        placeholder="Enter name"
                        type="text"
                        value={form.name}
                    />
                </div>

                <div className="col-md-4">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="Enter email"
                        type="email"
                        value={form.email}
                    />
                </div>

                <div className="col-md-4">
                    <label className="form-label" htmlFor="role">Role</label>
                    <input
                        className="form-control"
                        id="role"
                        name="role"
                        onChange={handleChange}
                        placeholder="Enter role"
                        type="text"
                        value={form.role}
                    />
                </div>

                <div className="col-12 d-flex gap-2">
                    <button className="btn btn-primary" type="submit">
                        {editingId ? "Update User" : "Add User"}
                    </button>
                    {editingId && (
                        <button className="btn btn-secondary" onClick={resetForm} type="button">
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            <div className="table-responsive">
                <table className="table table-bordered table-striped align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-warning me-2"
                                            onClick={() => handleEdit(user)}
                                            type="button"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleDelete(user.id)}
                                            type="button"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="text-center" colSpan={4}>No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CrudOperations
