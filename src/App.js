import React, { useState } from "react";
import "./App.css";

function App() {
  const [showpassword, setShowpassword] = useState("");
  const [password, setPassword] = useState({
    length: 6,
    symbol: false,
    number: false,
    lowercase: false,
    uppercase: false,

    ambcharacter: false,
  });

  const onChange = (e) => {
    if (e.target.name === "length") {
      setPassword({
        ...password,
        [e.target.name]: e.target.value,
      });
    } else {
      setPassword({
        ...password,
        [e.target.name]: e.target.checked,
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(password);
      let strongPassword = "";
      const lowercase = { min: 97, max: 122 };
      const uppercase = { min: 65, max: 90 };
      const symbol = { min: 33, max: 47 };
      const number = { min: 48, max: 57 };
      const ambcharacter = { min: 91, max: 96 };
      const charsets = [lowercase, uppercase, symbol, number, ambcharacter];
      let index;
      for (let i = 1; i <= password.length; i++) {
        index = Math.floor(Math.random() * 5);
        strongPassword += String.fromCharCode(
          Math.floor(
            Math.random() * (charsets[index].max - charsets[index].min)
          ) + charsets[index].min
        );
      }
      setShowpassword(strongPassword);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <div>
        <div className="title">
          <div>
            <h1> Strong Password Generator</h1>
          </div>
          <div>
            <img src="/logo.png" width={100} height={100} />
          </div>
          <hr />
          <div>
            <form className="main" onSubmit={onSubmit}>
              <label>Password Length:</label>
              <select
                name="length"
                id="passwordlength"
                title="Select the length of your password."
                onChange={onChange}
              >
                <optgroup label="Weak">
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                </optgroup>
                <optgroup label="Strong">
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                  <option value="45">45</option>
                  <option value="46">46</option>
                  <option value="47">47</option>
                  <option value="48">48</option>
                  <option value="49">49</option>
                  <option value="50">50</option>
                  <option value="51">51</option>
                  <option value="52">52</option>
                  <option value="53">53</option>
                  <option value="54">54</option>
                  <option value="55">55</option>
                  <option value="56">56</option>
                  <option value="57">57</option>
                  <option value="58">58</option>
                  <option value="59">59</option>
                  <option value="60">60</option>
                  <option value="61">61</option>
                  <option value="62">62</option>
                  <option value="63">63</option>
                  <option value="64">64</option>
                  <option value="65">65</option>
                  <option value="66">66</option>
                  <option value="67">67</option>
                  <option value="68">68</option>
                  <option value="69">69</option>
                  <option value="70">70</option>
                  <option value="71">71</option>
                  <option value="72">72</option>
                  <option value="73">73</option>
                  <option value="74">74</option>
                  <option value="75">75</option>
                  <option value="76">76</option>
                  <option value="77">77</option>
                  <option value="78">78</option>
                  <option value="79">79</option>
                  <option value="80">80</option>
                  <option value="81">81</option>
                  <option value="82">82</option>
                  <option value="83">83</option>
                  <option value="84">84</option>
                  <option value="85">85</option>
                  <option value="86">86</option>
                  <option value="87">87</option>
                  <option value="88">88</option>
                  <option value="89">89</option>
                  <option value="90">90</option>
                  <option value="91">91</option>
                  <option value="92">92</option>
                  <option value="93">93</option>
                  <option value="94">94</option>
                  <option value="95">95</option>
                  <option value="96">96</option>
                  <option value="97">97</option>
                  <option value="98">98</option>
                  <option value="99">99</option>
                  <option value="100">100</option>
                  <option value="101">101</option>
                  <option value="102">102</option>
                  <option value="103">103</option>
                  <option value="104">104</option>
                  <option value="105">105</option>
                  <option value="106">106</option>
                  <option value="107">107</option>
                  <option value="108">108</option>
                  <option value="109">109</option>
                  <option value="110">110</option>
                  <option value="111">111</option>
                  <option value="112">112</option>
                  <option value="113">113</option>
                  <option value="114">114</option>
                  <option value="115">115</option>
                  <option value="116">116</option>
                  <option value="117">117</option>
                  <option value="118">118</option>
                  <option value="119">119</option>
                  <option value="120">120</option>
                  <option value="121">121</option>
                  <option value="122">122</option>
                  <option value="123">123</option>
                  <option value="124">124</option>
                  <option value="125">125</option>
                  <option value="126">126</option>
                  <option value="127">127</option>
                  <option value="128">128</option>
                </optgroup>

                <optgroup label="Unbelievable">
                  <option value="256">256</option>
                  <option value="512">512</option>
                  <option value="1024">1024</option>
                  <option value="2048">2048</option>
                </optgroup>
              </select>
              <div className="form-data">
                <label>Include Symbols:</label>
                <label>
                  <input
                    type="checkbox"
                    name="symbol"
                    id="Symbols"
                    onChange={onChange}
                  />
                  ( e.g. @#$% )
                </label>
              </div>
              <div className="form-data">
                <label>Include Numbers:</label>
                <label>
                  <input
                    type="checkbox"
                    name="number"
                    id="Symbols"
                    onChange={onChange}
                  />
                  ( e.g. 123456 )
                </label>
              </div>
              <div className="form-data">
                <label>Include Lowercase Characters:</label>
                <label>
                  <input
                    type="checkbox"
                    name="lowercase"
                    id="Symbols"
                    onChange={onChange}
                  />
                  ( e.g. abcdefgh )
                </label>
              </div>
              <div className="form-data">
                <label>Include Uppercase Characters::</label>
                <label>
                  <input
                    type="checkbox"
                    name="uppercase"
                    id="Symbols"
                    onChange={onChange}
                  />
                  ( e.g. ABCDEFGH )
                </label>
              </div>

              <div className="form-data">
                <label>Exclude Ambiguous Characters:</label>
                <label>
                  <input
                    type="checkbox"
                    name="ambcharacter"
                    id="Symbols"
                    onChange={onChange}
                  />
                  ( e.g. / \ ' " ` ~ , ; : )
                </label>
              </div>
              <button type="submit">Generate Password</button>
              <div className="form-data">
                <label>Your New Password:</label>
                <input
                  name="final_pass"
                  id="final_pass"
                  type="text"
                 width={60}
                  
                  value={showpassword}
                />
              </div>
            </form>
            <button onClick={() => navigator.clipboard.writeText(showpassword)}>
              Copy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
