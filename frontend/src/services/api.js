const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const fetchDestinations = async () => {
  const response = await fetch(`${API_BASE}/destinations`);
  if (!response.ok) {
    throw new Error("Failed to load destinations");
  }
  return response.json();
};

export const fetchPackages = async () => {
  const response = await fetch(`${API_BASE}/packages`);
  if (!response.ok) {
    throw new Error("Failed to load packages");
  }
  return response.json();
};

export const createBooking = async (payload) => {
  const response = await fetch(`${API_BASE}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Booking failed");
  }
  return response.json();
};

export const submitMessage = async (payload) => {
  const response = await fetch(`${API_BASE}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Message failed");
  }
  return response.json();
};
