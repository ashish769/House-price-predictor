// Get form values
function getFormValues() {
    return {
        sqft: parseFloat(document.getElementById("area").value),
        bhk: parseInt(document.getElementById("bhk").value),
        bath: parseInt(document.getElementById("bathroom").value),
        location: document.getElementById("uiLocation").value
    };
}

// Handle Estimate Price button click
function onEstimatePriceClicked(event) {
    event.preventDefault(); // Prevent form submission and page reload
    console.log("Estimate Price button clicked");

    const { sqft, bhk, bath, location } = getFormValues();
    const resultDisplay = document.getElementById("result");

    if (!sqft || !bhk || !bath || !location) {
        resultDisplay.innerHTML = `<h3 style="color:red;">Please fill in all fields correctly.</h3>`;
        return;
    }

    const url = "http://127.0.0.1:5000/price";

    $.post(url, {
        total_sqft: sqft,
        bhk: bhk,
        bath: bath,
        location: location
    }, function (data) {
        if (data.estimated_price) {
            resultDisplay.innerHTML = `<h2>Estimated Price: ₹${data.estimated_price} Lakhs</h2>`;
        } else {
            resultDisplay.innerHTML = `<h3 style="color:red;">Could not fetch estimated price.</h3>`;
        }
    }).fail(function () {
        resultDisplay.innerHTML = `<h3 style="color:red;">Server error. Please try again later.</h3>`;
    });
}

// Load location options from the server
function loadLocations() {
    const url = "http://127.0.0.1:5000/loc";

    $.get(url, function (data) {
        const locationSelect = $("#uiLocation");
        if (data.locations && Array.isArray(data.locations)) {
            data.locations.forEach(function (loc) {
                locationSelect.append(
                    $("<option></option>").text(loc).val(loc)
                );
            });
        } else {
            console.error("Invalid locations response.");
        }
    }).fail(function () {
        console.error("Failed to fetch locations.");
    });
}

// Initialize when page is ready
$(document).ready(function () {
    loadLocations();

    // Attach form submit handler
    $("#priceForm").submit(onEstimatePriceClicked);
});
