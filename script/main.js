function convertWeight()
{
    const weight = document.getElementById("Weight").value
    const num1 = document.getElementById("unit1").value
    const num2 = document.getElementById("unit2").value
    
    if (num1 == "Kilograms" && num2 == "Kilograms") 
    {
        document.getElementById("convert").innerHTML = "The Units are the same."
    } 
    else if (num1 == "Kilograms" && num2 == "Pounds")
    {
        document.getElementById("convert").innerHTML = weight * 2.2046
    }
    else if (num1 == "Kilograms" && num2 == "Grams")
    {
        document.getElementById("convert").innerHTML = weight * 1000
    }
    else if (num1 == "Kilograms" && num2 == "Stones")
    {
        document.getElementById("convert").innerHTML = weight * 0.1574
    }
    else if (num1 == "Grams" && num2 == "Kilograms")
    {
        document.getElementById("convert").innerHTML = weight / 1000
    }
    else if (num1 == "Grams" && num2 == "Grams")
    {
        document.getElementById("convert").innerHTML = "The Units are the same."
    }
    else if (num1 == "Grams" && num2 == "Pounds")
    {
        document.getElementById("convert").innerHTML = weight * 0.0022046
    }
    else if (num1 == "Grams" && num2 == "Stones")
    {
        document.getElementById("convert").innerHTML = weight * 0.00015747
    }
    else if (num1 == "Pounds" && num2 == "Kilograms")
    {
        document.getElementById("convert").innerHTML = weight / 2.2046
    }
    else if (num1 == "Pounds" && num2 == "Grams")
    {
        document.getElementById("convert").innerHTML = weight / 0.0022046
    }
    else if (num1 == "Pounds" && num2 == "Pounds")
    {
        document.getElementById("convert").innerHTML = "The Units are the same."
    }
    else if (num1 == "Pounds" && num2 == "Stones")
    {
        document.getElementById("convert").innerHTML = weight * 0.071429
    }
    else if (num1 == "Stones" && num2 == "Kilograms")
    {
        document.getElementById("convert").innerHTML = weight / 0.15747
    }
    else if (num1 == "Stones" && num2 == "Grams")
    {
        document.getElementById("convert").innerHTML = weight / 0.00015747
    }
    else if (num1 == "Stones" && num2 == "Pounds")
    {
        document.getElementById("convert").innerHTML = weight * 14
    }
    else if (num1 == "Stones" && num2 == "Stones")
    {
        document.getElementById("convert").innerHTML = "The Units are the same."
    }
    else
    {
        document.getElementById("convert").innerHTML = "Please enter the value required."
    }
}

function clearInput()
{
    document.getElementById("Weight").value = " "
}