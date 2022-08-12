

export const goToHomePage = (navigate)=> {
    navigate("/")
}

export const goToLoginPage = (navigate)=> {
    navigate("/login")
}

export const goToApplicationFormPage = (navigate)=> {
    navigate("trips/application")
}

export const goToListTripPage = (navigate)=> {
    navigate("trips/list")
}

export const goToAdminHomePage = (navigate)=> {
    navigate("/admin/trips/list")
}

export const goToCreateTripPage = (navigate)=> {
    navigate("admin/trips/create")
}

export const goToTripDetailsPage = (navigate)=> {
    navigate("/admin/trips/:id")
}


