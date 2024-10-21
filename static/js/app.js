$(document).ready(function() {
    $('.select2').select2();

    $('#country').change(function() {
        const countryName = $(this).val();
        $('#city').prop('disabled', !countryName).val('').empty().append('<option value="">Select City</option>');

        if (countryName) {
            $.getJSON(`/get_cities/${countryName}`, function(cities) {
                $('#city').empty().append('<option value="">Select City</option>');
                cities.forEach(city => {
                    $('#city').append(`<option value="${city}">${city}</option>`);
                });
                $('#get-rating').prop('disabled', false);
            });
        } else {
            $('#city').empty().append('<option value="">Select City</option>');
            $('#get-rating').prop('disabled', true);
        }
    });

    $('#get-rating').click(function() {
        const countryName = $('#country').val();
        const cityName = $('#city').val();

        if (countryName && cityName) {
            $.getJSON(`/get_safety_rating/${countryName}/${cityName}`, function(data) {
                $('#rating-result').html(`<h3>Safety Rating: ${data.safety_rating.toFixed(2)}%</h3>`);
            }).fail(function() {
                $('#rating-result').html('<h3>Data is still being collected...</h3>');
            });
        }
    });
});