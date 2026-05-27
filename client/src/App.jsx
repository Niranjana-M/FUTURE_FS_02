import profile from "./assets/profile.jpg";
import Login from "./Login";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    source: "",
    notes: "",
  });

  const [isLoggedIn, setIsLoggedIn] =
useState(
  localStorage.getItem("token")
);
  const fetchLeads = async () => {
    try {
      const res = await axios.get("https://future-fs-02-xux5.onrender.com/api/leads");

      setLeads(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const addLead = async (e) => {
  e.preventDefault(); 

  try {
    await axios.post("https://future-fs-02-xux5.onrender.com", {
      name: formData.name,
      email: formData.email,
      source: formData.source,
      notes: formData.notes,
    });

    setFormData({
      name: "",
      email: "",
      source: "",
      notes: "",
    });

    fetchLeads();
  } catch (error) {
    console.error("Add lead error:", error);
  }
};

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `https://future-fs-02-xux5.onrender.com${id}`,
        { status }
      );

      fetchLeads();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLead = async (id) => {
    try {
      await axios.delete(
        `https://future-fs-02-xux5.onrender.com${id}`
      );

      fetchLeads();
    } catch (error) {
      console.log(error);
    }
  };
  if (!isLoggedIn) {
  return (
    <Login
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

return (
  <div className="dashboard">

      <div className="navbar">
       <div className="profile-card">

  <img
    src={profile}
    alt="profile"
  />

  <div>
    <h2>Niranjana M</h2>

    <p>Full Stack Developer</p>

    <span>
      mniranjana963@gmail.com
    </span>
  </div>


</div>
        <h1>Mini CRM Dashboard</h1>
      </div>

      <div className="stats-container">

        <div className="card stats-card">
          <h2>Total Leads</h2>
          <p>{leads.length}</p>
        </div>

        <div className="card stats-card">
          <h2>New</h2>
          <p>
            {
              leads.filter(
                (lead) => lead.status === "New"
              ).length
            }
          </p>
        </div>

        <div className="card stats-card">
          <h2>Contacted</h2>
          <p>
            {
              leads.filter(
                (lead) =>
                  lead.status === "Contacted"
              ).length
            }
          </p>
        </div>

        <div className="card stats-card">
          <h2>Converted</h2>
          <p>
            {
              leads.filter(
                (lead) =>
                  lead.status === "Converted"
              ).length
            }
          </p>
        </div>

      </div>

      <div className="form-card">

        <h2>Add New Lead</h2>

        <form onSubmit={addLead}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="source"
            placeholder="Lead Source"
            value={formData.source}
            onChange={handleChange}
            required
          />

          <textarea
            name="notes"
            placeholder="Enter Notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Add Lead
          </button>

        </form>

      </div>

      <h2 className="lead-title">
        All Leads
      </h2>

      <input
        type="text"
        placeholder="Search leads..."
        className="search-input"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="lead-grid">

        {leads
          .filter(
            (lead) =>
              lead.name
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                ) ||
              lead.email
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                ) ||
              lead.source
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
          )
          .map((lead) => (
            <div
              className="lead-card"
              key={lead._id}
            >

              <h3>{lead.name}</h3>

              <p>{lead.email}</p>

              <span className="source">
                {lead.source}
              </span>

              <div className="status">
                {lead.status}
              </div>

              <p className="notes">
                {lead.notes}
              </p>
              <p className="date">
  Added:
  {" "}
  {new Date(
    lead.createdAt
  ).toLocaleDateString()}
</p>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteLead(lead._id)
                }
              >
                Delete
              </button>

              <select
                onChange={(e) =>
                  updateStatus(
                    lead._id,
                    e.target.value
                  )
                }
                value={lead.status}
              >
                <option>New</option>
                <option>Contacted</option>
                <option>Converted</option>
              </select>

            </div>
          ))}

      </div>

    </div>
  );
}

export default App;