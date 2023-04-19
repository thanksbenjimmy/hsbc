$(document).ready(function() {
  const healthInsuranceData = [
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "0 - 30",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 985.08
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "31 - 40",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 1272.68
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "41 - 45",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 1425.49
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "46 - 50",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 1777.63
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "51 - 55",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 2157.29
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "56 - 60",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 2789.42
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "61 - 65",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 3799.31
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "66 - 70",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 5693.81
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "70+",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 10877.24
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "0 - 30",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 821.98
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "31 - 40",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 1061.54
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "41 - 45",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 1188.84
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "46 - 50",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 1482.17
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "51 - 55",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 1798.42
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "56 - 60",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 2324.99
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "61 - 65",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 3166.23
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "66 - 70",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 4744.35
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "70+",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 9062.15
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "0 - 30",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 574.1
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "31 - 40",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 675.66
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "41 - 45",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 754.44
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "46 - 50",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 912
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "51 - 55",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 1137.9
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "56 - 60",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 1524.2
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "61 - 65",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 2011.11
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "66 - 70",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 3001.08
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "70+",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 5759.49
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "0 - 30",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 509.56
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "31 - 40",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 599.73
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "41 - 45",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 669.02
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "46 - 50",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 836.06
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "51 - 55",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 1011.66
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "56 - 60",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 1304.95
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "61 - 65",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 1778.57
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "66 - 70",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 2662.23
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "70+",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 5098.77
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "0 - 30",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 545.63
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "31 - 40",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 704.14
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "41 - 45",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 787.66
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "46 - 50",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 983.18
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "51 - 55",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 1190.1
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "56 - 60",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 1537.49
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "61 - 65",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 2093.69
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "66 - 70",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 3135.86
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "70+",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 5986.79
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "0 - 30",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 455.91
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "31 - 40",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 587.95
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "41 - 45",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 657.53
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "46 - 50",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 820.4
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "51 - 55",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 992.76
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "56 - 60",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 1282.13
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "61 - 65",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 1745.45
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "66 - 70",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 2613.57
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "70+",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 4988.4
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "0 - 30",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 318.78
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "31 - 40",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 374.78
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "41 - 45",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 418.44
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "46 - 50",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 505.76
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "51 - 55",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 630.1
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "56 - 60",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 843.66
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "61 - 65",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 1109.42
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "66 - 70",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 1654.23
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "70+",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 3163.81
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "0 - 30",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 283.67
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "31 - 40",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 333.97
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "41 - 45",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 372.88
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "46 - 50",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 464
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "51 - 55",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 559.86
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "56 - 60",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 721.22
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "61 - 65",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 983.18
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "66 - 70",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 1468.2
    },
    {
      "Hospital cover": "Option 1: Private hospital with no co-payment",
      "Age bracket": "70+",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 2804.26
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "0 - 30",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 789.56
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "31 - 40",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 1019.26
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "41 - 45",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 1141.7
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "46 - 50",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 1424.54
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "51 - 55",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 1727.32
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "56 - 60",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 2233.21
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "61 - 65",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 3040.94
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "66 - 70",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 4556.73
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "70+",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 8701.4
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "0 - 30",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 659.11
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "31 - 40",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 850.45
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "41 - 45",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 952.44
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "46 - 50",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 1188.04
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "51 - 55",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 1440.26
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "56 - 60",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 1861.67
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "61 - 65",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 2534.51
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "66 - 70",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 3797.16
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "70+",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 7249.67
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "0 - 30",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 460.21
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "31 - 40",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 541.83
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "41 - 45",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 604.48
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "46 - 50",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 731.66
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "51 - 55",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 912
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "56 - 60",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 1221.42
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "61 - 65",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 1610.57
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "66 - 70",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 2403.11
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "70+",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 4601.55
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "0 - 30",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 408.95
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "31 - 40",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 482.98
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "41 - 45",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 537.09
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "46 - 50",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 670.92
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "51 - 55",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 810.44
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "56 - 60",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 1046.78
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "61 - 65",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 1425.49
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "66 - 70",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 2131.65
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "70+",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 4076.8
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "0 - 30",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 438.37
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "31 - 40",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 565.56
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "41 - 45",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 632.95
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "46 - 50",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 787.66
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "51 - 55",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 953.76
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "56 - 60",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 1231.86
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "61 - 65",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 1676.07
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "66 - 70",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 2510.37
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "70+",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 4793.19
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "0 - 30",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 366.57
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "31 - 40",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 472.52
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "41 - 45",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 528.65
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "46 - 50",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 657.53
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "51 - 55",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 795.89
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "56 - 60",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 1027.54
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "61 - 65",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 1397.57
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "66 - 70",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 2092.54
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "70+",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 3994.13
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "0 - 30",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 257.09
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "31 - 40",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 300.75
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "41 - 45",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 336.81
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "46 - 50",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 406.1
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "51 - 55",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 505.76
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "56 - 60",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 675.66
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "61 - 65",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 889.22
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "66 - 70",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 1324.88
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "70+",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 2536.57
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "0 - 30",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 229.56
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "31 - 40",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 269.43
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "41 - 45",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 298.85
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "46 - 50",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 372.88
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "51 - 55",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 449.76
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "56 - 60",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 580.75
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "61 - 65",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 787.66
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "66 - 70",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 1176.82
    },
    {
      "Hospital cover": "Option 2: Private hospital with 20% co-payment",
      "Age bracket": "70+",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 2254.75
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "0 - 30",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 644.34
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "31 - 40",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 830.38
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "41 - 45",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 930.98
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "46 - 50",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 1158.78
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "51 - 55",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 1405.56
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "56 - 60",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 1815.59
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "61 - 65",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 2472.4
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "66 - 70",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 3704.39
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "70+",
      "Room type": "1 bed",
      "Policy limit": 250000,
      "Price": 7085.34
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "0 - 30",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 538.14
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "31 - 40",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 693.11
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "41 - 45",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 776.91
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "46 - 50",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 966.67
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "51 - 55",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 1172.23
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "56 - 60",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 1513.79
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "61 - 65",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 2060.92
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "66 - 70",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 3087.16
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "70+",
      "Room type": "1 bed",
      "Policy limit": 100000,
      "Price": 5903.49
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "0 - 30",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 374.78
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "31 - 40",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 442.17
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "41 - 45",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 493.43
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "46 - 50",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 595.93
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "51 - 55",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 743.05
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "56 - 60",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 995.52
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "61 - 65",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 1310.64
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "66 - 70",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 1953.21
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "70+",
      "Room type": "1 bed",
      "Policy limit": 60000,
      "Price": 3733.12
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "0 - 30",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 333.97
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "31 - 40",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 392.81
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "41 - 45",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 437.43
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "46 - 50",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 546.58
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "51 - 55",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 660.48
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "56 - 60",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 852.2
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "61 - 65",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 1158.78
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "66 - 70",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 1733.01
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "70+",
      "Room type": "1 bed",
      "Policy limit": 30000,
      "Price": 3315.2
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "0 - 30",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 358.65
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "31 - 40",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 460.21
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "41 - 45",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 516.2
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "46 - 50",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 641.49
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "51 - 55",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 777.22
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "56 - 60",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 1003.12
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "61 - 65",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 1363.8
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "66 - 70",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 2040.53
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "70+",
      "Room type": "4 bed",
      "Policy limit": 250000,
      "Price": 3905.99
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "0 - 30",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 300.16
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "31 - 40",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 384.76
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "41 - 45",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 431.4
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "46 - 50",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 535.76
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "51 - 55",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 648.83
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "56 - 60",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 837
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "61 - 65",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 1137.45
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "66 - 70",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 1701.17
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "70+",
      "Room type": "4 bed",
      "Policy limit": 100000,
      "Price": 3255.1
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "0 - 30",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 210.58
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "31 - 40",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 246.65
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "41 - 45",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 275.12
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "46 - 50",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 331.12
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "51 - 55",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 412.75
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "56 - 60",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 551.32
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "61 - 65",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 724.07
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "66 - 70",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 1078.1
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "70+",
      "Room type": "4 bed",
      "Policy limit": 60000,
      "Price": 2063.79
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "0 - 30",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 187.8
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "31 - 40",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 220.07
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "41 - 45",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 243.8
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "46 - 50",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 304.55
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "51 - 55",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 367.19
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "56 - 60",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 472.54
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "61 - 65",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 641.49
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "66 - 70",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 957.56
    },
    {
      "Hospital cover": "Option 3: Government restructured hospital with no co-payment",
      "Age bracket": "70+",
      "Room type": "4 bed",
      "Policy limit": 30000,
      "Price": 1830.57
    }
  ];

  const lifeInsuranceData = [
    {
      "Age bracket": "0 - 30",
      "Cover amount": 500000,
      "Price": 434.4
    },
    {
      "Age bracket": "31 - 40",
      "Cover amount": 500000,
      "Price": 543
    },
    {
      "Age bracket": "41 - 45",
      "Cover amount": 500000,
      "Price": 868.7
    },
    {
      "Age bracket": "46 - 50",
      "Cover amount": 500000,
      "Price": 1248.8
    },
    {
      "Age bracket": "51 - 55",
      "Cover amount": 500000,
      "Price": 2171.8
    },
    {
      "Age bracket": "56 - 60",
      "Cover amount": 500000,
      "Price": 3800.7
    },
    {
      "Age bracket": "61 - 65",
      "Cover amount": 500000,
      "Price": 5972.5
    },
    {
      "Age bracket": "66 - 70",
      "Cover amount": 500000,
      "Price": 10859.1
    },
    {
      "Age bracket": "70+",
      "Cover amount": 500000,
      "Price": 17893.7
    },
    {
      "Age bracket": "0 - 30",
      "Cover amount": 300000,
      "Price": 260.64
    },
    {
      "Age bracket": "31 - 40",
      "Cover amount": 300000,
      "Price": 325.8
    },
    {
      "Age bracket": "41 - 45",
      "Cover amount": 300000,
      "Price": 521.22
    },
    {
      "Age bracket": "46 - 50",
      "Cover amount": 300000,
      "Price": 749.28
    },
    {
      "Age bracket": "51 - 55",
      "Cover amount": 300000,
      "Price": 1303.08
    },
    {
      "Age bracket": "56 - 60",
      "Cover amount": 300000,
      "Price": 2280.42
    },
    {
      "Age bracket": "61 - 65",
      "Cover amount": 300000,
      "Price": 3583.5
    },
    {
      "Age bracket": "66 - 70",
      "Cover amount": 300000,
      "Price": 6515.46
    },
    {
      "Age bracket": "70+",
      "Cover amount": 300000,
      "Price": 10736.22
    },
    {
      "Age bracket": "0 - 30",
      "Cover amount": 200000,
      "Price": 173.76
    },
    {
      "Age bracket": "31 - 40",
      "Cover amount": 200000,
      "Price": 217.2
    },
    {
      "Age bracket": "41 - 45",
      "Cover amount": 200000,
      "Price": 347.48
    },
    {
      "Age bracket": "46 - 50",
      "Cover amount": 200000,
      "Price": 499.52
    },
    {
      "Age bracket": "51 - 55",
      "Cover amount": 200000,
      "Price": 868.72
    },
    {
      "Age bracket": "56 - 60",
      "Cover amount": 200000,
      "Price": 1520.28
    },
    {
      "Age bracket": "61 - 65",
      "Cover amount": 200000,
      "Price": 2389
    },
    {
      "Age bracket": "66 - 70",
      "Cover amount": 200000,
      "Price": 4343.64
    },
    {
      "Age bracket": "70+",
      "Cover amount": 200000,
      "Price": 7157.48
    },
    {
      "Age bracket": "0 - 30",
      "Cover amount": 150000,
      "Price": 130.32
    },
    {
      "Age bracket": "31 - 40",
      "Cover amount": 150000,
      "Price": 162.9
    },
    {
      "Age bracket": "41 - 45",
      "Cover amount": 150000,
      "Price": 260.61
    },
    {
      "Age bracket": "46 - 50",
      "Cover amount": 150000,
      "Price": 374.64
    },
    {
      "Age bracket": "51 - 55",
      "Cover amount": 150000,
      "Price": 651.54
    },
    {
      "Age bracket": "56 - 60",
      "Cover amount": 150000,
      "Price": 1140.21
    },
    {
      "Age bracket": "61 - 65",
      "Cover amount": 150000,
      "Price": 1791.75
    },
    {
      "Age bracket": "66 - 70",
      "Cover amount": 150000,
      "Price": 3257.73
    },
    {
      "Age bracket": "70+",
      "Cover amount": 150000,
      "Price": 5368.11
    },
    {
      "Age bracket": "0 - 30",
      "Cover amount": 100000,
      "Price": 86.88
    },
    {
      "Age bracket": "31 - 40",
      "Cover amount": 100000,
      "Price": 108.6
    },
    {
      "Age bracket": "41 - 45",
      "Cover amount": 100000,
      "Price": 173.74
    },
    {
      "Age bracket": "46 - 50",
      "Cover amount": 100000,
      "Price": 249.76
    },
    {
      "Age bracket": "51 - 55",
      "Cover amount": 100000,
      "Price": 434.36
    },
    {
      "Age bracket": "56 - 60",
      "Cover amount": 100000,
      "Price": 760.14
    },
    {
      "Age bracket": "61 - 65",
      "Cover amount": 100000,
      "Price": 1194.5
    },
    {
      "Age bracket": "66 - 70",
      "Cover amount": 100000,
      "Price": 2171.82
    },
    {
      "Age bracket": "70+",
      "Cover amount": 100000,
      "Price": 3578.74
    },
    {
      "Age bracket": "0 - 30",
      "Cover amount": 50000,
      "Price": 43.44
    },
    {
      "Age bracket": "31 - 40",
      "Cover amount": 50000,
      "Price": 54.3
    },
    {
      "Age bracket": "41 - 45",
      "Cover amount": 50000,
      "Price": 86.87
    },
    {
      "Age bracket": "46 - 50",
      "Cover amount": 50000,
      "Price": 124.88
    },
    {
      "Age bracket": "51 - 55",
      "Cover amount": 50000,
      "Price": 217.18
    },
    {
      "Age bracket": "56 - 60",
      "Cover amount": 50000,
      "Price": 380.07
    },
    {
      "Age bracket": "61 - 65",
      "Cover amount": 50000,
      "Price": 597.25
    },
    {
      "Age bracket": "66 - 70",
      "Cover amount": 50000,
      "Price": 1085.91
    },
    {
      "Age bracket": "70+",
      "Cover amount": 50000,
      "Price": 1789.37
    }
  ];

  function getLifeInsurancePrice(ageBracket, coverAmount) {
    const matchingPrice = lifeInsuranceData.find(item => item["Age bracket"] === ageBracket && item["Cover amount"] === coverAmount);
    const yearlyPricePerEmployee = matchingPrice ? matchingPrice.Price : 0;

    // Calculate the monthly price per employee
    return yearlyPricePerEmployee / 12;
  }

  function getHealthInsurancePrice(ageBracket, roomType, hospitalCover, policyLimit) {
    const matchingPrice = healthInsuranceData.find(item =>
      item["Age bracket"] === ageBracket &&
      item["Room type"] === roomType &&
      item["Hospital cover"] === hospitalCover &&
      item["Policy limit"] === policyLimit
    );

    const yearlyPricePerEmployee = matchingPrice ? matchingPrice.Price : 0;

    // Calculate the monthly price per employee
    return yearlyPricePerEmployee / 12;
  }

  // Event listener for the "get quote" button
  $("#calculate-price").click(function() {
    // Retrieve input values
    const numberOfEmployees = parseInt($("#no-of-employees").val());
    const ageBracket = $("#avg-age").val();
    const isLifeInsuranceSelected = $("#li-checkbox").is(":checked");
    const selectedCoverAmount = parseInt($("#li-cover-amount").val());
    const isHealthInsuranceSelected = $("#hi-checkbox").is(":checked");
    const roomType = $("#room-type").val();
    const hospitalCover = $("#hospital-cover").val();
    const policyLimit = parseInt($("#hi-policy-limit").val());

    if (!numberOfEmployees || !ageBracket) {
  alert("Please fill out your company details.");
  return;
}
    // Check if at least one benefit is selected
    const selectedBenefits = $("input[benefit_value]:checked");
    if (selectedBenefits.length > 0 || isLifeInsuranceSelected || isHealthInsuranceSelected) {
      // Calculate the total cost of fixed-price benefits per employee
      let fixedBenefitsCostPerEmployee = 0;
      selectedBenefits.each(function() {
        fixedBenefitsCostPerEmployee += parseFloat($(this).attr("benefit_value"));
      });

      // Calculate the cost of life insurance if selected
      const lifeInsuranceCostPerEmployee = isLifeInsuranceSelected ? getLifeInsurancePrice(ageBracket, selectedCoverAmount) : 0;

      // Calculate the cost of health insurance if selected
      const healthInsuranceCostPerEmployee = isHealthInsuranceSelected ? getHealthInsurancePrice(ageBracket, roomType, hospitalCover, policyLimit) : 0;

      // Calculate the total cost per employee for all selected benefits
      const totalCostPerEmployee = fixedBenefitsCostPerEmployee + lifeInsuranceCostPerEmployee + healthInsuranceCostPerEmployee + 5;

      // Multiply the total cost per employee by the number of employees
      const totalCostForAllEmployees = totalCostPerEmployee * numberOfEmployees;

      const nextPageButton = $("#progress-button");
    const nextPageUrl = new URL(nextPageButton.attr("href"));
    nextPageUrl.searchParams.set("price", totalCostPerEmployee.toFixed(2));
    nextPageButton.attr("href", nextPageUrl.toString());

      // User-friendly changes: Change button text, scroll, flash highlight, etc.
      $(this).text("Calculating...");
      setTimeout(() => {
        $(this).text("Recalculate quote");

        // Scroll to the table section
        $('html, body').animate({
          scrollTop: $("#table").offset().top
        }, 500);

        $("#overlay").hide();
        $("#block-button").hide();

        // Show the progress button by removing the 'hide' class
        $("#progress-button").removeClass("hide");


        // Flash highlight the div block containing the quote
        const quoteDiv = $("#quoteDiv");
        quoteDiv.addClass("highlight");
        setTimeout(() => {
          quoteDiv.removeClass("highlight");
        }, 2000);
      }, 500);

      // Display the total cost with 'S$' in front of it
      $("#price-text").text(`S$${Math.round(totalCostPerEmployee)}`);
    } else {
      // Show an alert or display a message when no benefit is selected
      alert("Please select at least one benefit before proceeding.");
    }
  });
});
