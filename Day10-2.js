let input = [
    `18
47
144
147
124
45
81
56
16
59
97
83
75
150
33
165
30
159
84
141
104
25
164
90
92
88
2
8
51
24
153
63
27
123
127
58
108
52
38
15
149
66
72
21
46
89
135
55
34
37
78
65
134
148
76
138
103
162
114
109
42
77
102
163
7
105
69
39
91
111
131
130
6
137
96
82
64
3
95
136
85
9
116
17
99
12
117
62
50
110
26
115
71
57
156
120
98
1
70`
];

let processedInput = input[0].split('\n');
orderInput(processedInput);
let result = countArragements(processedInput);
console.log(result);

function orderInput(arrayInput) {
    for (let i = 0; i < arrayInput.length; i++) {
        for (let j = 0; j < arrayInput.length; j++) {
            if(Number(arrayInput[i]) < Number(arrayInput[j])) {
                let temp = Number(arrayInput[i]);
                arrayInput[i] = Number(arrayInput[j]);
                arrayInput[j] = temp;
            }
        }
    }
}

function countArragements(arrayInput) {
    let prod = 1;
    let count = 0;
    arrayInput.splice(0, 0, 0);
    arrayInput.push(Math.max(...arrayInput)+3);

    for (let i = 1; i < arrayInput.length; i++) {
        if(arrayInput[i] - arrayInput[i-1] > 0  && arrayInput[i] - arrayInput[i-1] < 3) {
            if(count === 3) {
                prod *= 7;
                count = 0;
            }
            count++;
        } else if (arrayInput[i] - arrayInput[i-1] === 3) {
            if(count === 3) {
                prod *= 4;
            } else if (count === 2) {
                prod *= 2;
            }
            count = 0;
        }
    }
    return prod;
}