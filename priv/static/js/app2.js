var app = `/* This file is for your main application css. */
/* Includes some default style for the starter application.
 * This can be safely deleted to start fresh.
 */
/* Milligram v1.3.0 https://milligram.github.io
 * Copyright (c) 2017 CJ Patoilo Licensed under the MIT license
 */
*,
*:after,
*:before {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  background-color: #000000;
}
body {
  color: #ffffff;
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 13px;
  line-height: 1.5;
}
blockquote {
  border-left: 0.3rem solid #ffffff;
  margin-left: 0;
  margin-right: 0;
  padding: 1rem 1.5rem;
}
blockquote *:last-child {
  margin-bottom: 0;
}
.button,
button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
  background-color: #000000;
  border: 0.1rem solid #606c76;
  color: #ffffff;
  border-radius: 0.4rem;
  cursor: pointer;
  display: inline-block;
  padding: 0.2rem;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
}
.button:focus,
.button:hover,
button:focus,
button:hover,
input[type="button"]:focus,
input[type="button"]:hover,
input[type="reset"]:focus,
input[type="reset"]:hover,
input[type="submit"]:focus,
input[type="submit"]:hover {
  background-color: #1f1f1f;
  border-color: #606c76;
  outline: 0;
  color: #ffffff;
}
.button[disabled],
button[disabled],
input[type="button"][disabled],
input[type="reset"][disabled],
input[type="submit"][disabled] {
  cursor: default;
  opacity: 0.5;
}
.button[disabled]:focus,
.button[disabled]:hover,
button[disabled]:focus,
button[disabled]:hover,
input[type="button"][disabled]:focus,
input[type="button"][disabled]:hover,
input[type="reset"][disabled]:focus,
input[type="reset"][disabled]:hover,
input[type="submit"][disabled]:focus,
input[type="submit"][disabled]:hover {
  background-color: #86c1ff;
  border-color: #86c1ff;
}
.button.button-outline,
button.button-outline,
input[type="button"].button-outline,
input[type="reset"].button-outline,
input[type="submit"].button-outline {
  background-color: transparent;
  color: #86c1ff;
}
.button.button-outline:focus,
.button.button-outline:hover,
button.button-outline:focus,
button.button-outline:hover,
input[type="button"].button-outline:focus,
input[type="button"].button-outline:hover,
input[type="reset"].button-outline:focus,
input[type="reset"].button-outline:hover,
input[type="submit"].button-outline:focus,
input[type="submit"].button-outline:hover {
  background-color: transparent;
  border-color: #606c76;
  color: #606c76;
}
.button.button-outline[disabled]:focus,
.button.button-outline[disabled]:hover,
button.button-outline[disabled]:focus,
button.button-outline[disabled]:hover,
input[type="button"].button-outline[disabled]:focus,
input[type="button"].button-outline[disabled]:hover,
input[type="reset"].button-outline[disabled]:focus,
input[type="reset"].button-outline[disabled]:hover,
input[type="submit"].button-outline[disabled]:focus,
input[type="submit"].button-outline[disabled]:hover {
  border-color: inherit;
  color: #86c1ff;
}
.button.button-clear,
button.button-clear,
input[type="button"].button-clear,
input[type="reset"].button-clear,
input[type="submit"].button-clear {
  background-color: transparent;
  border-color: transparent;
  color: #86c1ff;
}
.button.button-clear:focus,
.button.button-clear:hover,
button.button-clear:focus,
button.button-clear:hover,
input[type="button"].button-clear:focus,
input[type="button"].button-clear:hover,
input[type="reset"].button-clear:focus,
input[type="reset"].button-clear:hover,
input[type="submit"].button-clear:focus,
input[type="submit"].button-clear:hover {
  background-color: transparent;
  border-color: transparent;
  color: #606c76;
}
.button.button-clear[disabled]:focus,
.button.button-clear[disabled]:hover,
button.button-clear[disabled]:focus,
button.button-clear[disabled]:hover,
input[type="button"].button-clear[disabled]:focus,
input[type="button"].button-clear[disabled]:hover,
input[type="reset"].button-clear[disabled]:focus,
input[type="reset"].button-clear[disabled]:hover,
input[type="submit"].button-clear[disabled]:focus,
input[type="submit"].button-clear[disabled]:hover {
  color: #86c1ff;
}
code {
  background: #f4f5f6;
  border-radius: 0.4rem;
  font-size: 86%;
  margin: 0 0.2rem;
  padding: 0.2rem 0.5rem;
  white-space: nowrap;
}
pre {
  background: #f4f5f6;
  border-left: 0.3rem solid #86c1ff;
  overflow-y: hidden;
}
pre > code {
  border-radius: 0;
  display: block;
  padding: 1rem 1.5rem;
  white-space: pre;
}
hr {
  border: 0;
  border-top: 0.1rem solid #f4f5f6;
  margin: 3rem 0;
}
input[type="email"],
input[type="number"],
input[type="password"],
input[type="search"],
input[type="tel"],
input[type="text"],
input[type="url"],
textarea,
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 0.1rem solid #ffffff;
  color: #ffffff;
  border-radius: 0.4rem;
  box-shadow: none;
  box-sizing: inherit;
  height: 2rem;
  padding: 0.5rem 0.5rem;
  /* width: 100%; */
}
input[type="email"]:focus,
input[type="number"]:focus,
input[type="password"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="text"]:focus,
input[type="url"]:focus,
textarea:focus,
select:focus {
  border-color: #86c1ff;
  outline: 0;
}
select {
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="%23d1d1d1" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>')
    center right no-repeat;
  padding-right: 3rem;
}
select:focus {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="%2386c1ff" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>');
}
textarea {
  min-height: 6.5rem;
}
label,
legend {
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
fieldset {
  border-width: 0;
  padding: 0;
}
input[type="checkbox"],
input[type="radio"] {
  display: inline;
}
.label-inline {
  display: inline-block;
  font-weight: normal;
  margin-left: 0.5rem;
}
.row {
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
}
.row.row-no-padding {
  padding: 0;
}
.row.row-no-padding > .column {
  padding: 0;
}
.row.row-wrap {
  flex-wrap: wrap;
}
.row.row-top {
  align-items: flex-start;
}
.row.row-bottom {
  align-items: flex-end;
}
.row.row-center {
  align-items: center;
}
.row.row-stretch {
  align-items: stretch;
}
.row.row-baseline {
  align-items: baseline;
}
.row .column {
  display: block;
  flex: 1 1 auto;
  margin-left: 0;
  max-width: 100%;
  width: 100%;
}
.row .column.column-offset-10 {
  margin-left: 10%;
}
.row .column.column-offset-20 {
  margin-left: 20%;
}
.row .column.column-offset-25 {
  margin-left: 25%;
}
.row .column.column-offset-33,
.row .column.column-offset-34 {
  margin-left: 33.3333%;
}
.row .column.column-offset-50 {
  margin-left: 50%;
}
.row .column.column-offset-66,
.row .column.column-offset-67 {
  margin-left: 66.6666%;
}
.row .column.column-offset-75 {
  margin-left: 75%;
}
.row .column.column-offset-80 {
  margin-left: 80%;
}
.row .column.column-offset-90 {
  margin-left: 90%;
}
.row .column.column-10 {
  flex: 0 0 10%;
  max-width: 10%;
}
.row .column.column-20 {
  flex: 0 0 20%;
  max-width: 20%;
}
.row .column.column-25 {
  flex: 0 0 25%;
  max-width: 25%;
}
.row .column.column-33,
.row .column.column-34 {
  flex: 0 0 33.3333%;
  max-width: 33.3333%;
}
.row .column.column-40 {
  flex: 0 0 40%;
  max-width: 40%;
}
.row .column.column-50 {
  flex: 0 0 50%;
  max-width: 50%;
}
.row .column.column-60 {
  flex: 0 0 60%;
  max-width: 60%;
}
.row .column.column-66,
.row .column.column-67 {
  flex: 0 0 66.6666%;
  max-width: 66.6666%;
}
.row .column.column-75 {
  flex: 0 0 75%;
  max-width: 75%;
}
.row .column.column-80 {
  flex: 0 0 80%;
  max-width: 80%;
}
.row .column.column-90 {
  flex: 0 0 90%;
  max-width: 90%;
}
.row .column .column-top {
  align-self: flex-start;
}
.row .column .column-bottom {
  align-self: flex-end;
}
.row .column .column-center {
  -ms-grid-row-align: center;
  align-self: center;
}
@media (min-width: 40rem) {
  .row {
    flex-direction: row;
    margin-left: -1rem;
    width: calc(100% + 2rem);
  }
  .row .column {
    margin-bottom: inherit;
    padding: 0 1rem;
  }
}
a {
  color: #86c1ff;
  text-decoration: none;
}
a:focus,
a:hover {
  color: #5d7a91;
}
dl,
ol,
ul {
  list-style: none;
  margin-top: 0;
  padding-left: 0;
}
dl dl,
dl ol,
dl ul,
ol dl,
ol ol,
ol ul,
ul dl,
ul ol,
ul ul {
  font-size: 90%;
  margin: 1.5rem 0 1.5rem 3rem;
}
ol {
  list-style: decimal inside;
}
ul {
  list-style: circle inside;
}
.button,
button,
dd,
dt,
li {
  margin-bottom: 1rem;
}
blockquote,
dl,
figure,
form,
ol,
pre,
table,
ul {
  margin-bottom: 2.5rem;
}
table {
  border-spacing: 0;
  width: 100%;
}
td,
th {
  border-bottom: 0.1rem solid #ffffff;
  padding: 1.2rem 1.5rem;
  text-align: left;
}
td:first-child,
th:first-child {
  padding-left: 0;
}
td:last-child,
th:last-child {
  padding-right: 0;
}
b,
strong {
  font-weight: bold;
}
p {
  margin-top: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 300;
  letter-spacing: -0.1rem;
  margin-bottom: 2rem;
  margin-top: 0;
}
h1 {
  font-size: 4.6rem;
  line-height: 1.2;
}
h2 {
  font-size: 3.6rem;
  line-height: 1.25;
}
h3 {
  font-size: 2.8rem;
  line-height: 1.3;
}
h4 {
  font-size: 2.2rem;
  letter-spacing: -0.08rem;
  line-height: 1.35;
}
h5 {
  font-size: 1.8rem;
  letter-spacing: -0.05rem;
  line-height: 1.5;
}
h6 {
  font-size: 1.6rem;
  letter-spacing: 0;
  line-height: 1.4;
}
img {
  max-width: 100%;
}
.clearfix:after {
  clear: both;
  content: " ";
  display: table;
}
.float-left {
  float: left;
}
.float-right {
  float: right;
}
/* General style */
h1 {
  font-size: 3.6rem;
  line-height: 1.25;
}
h2 {
  font-size: 2.8rem;
  line-height: 1.3;
}
h3 {
  font-size: 2.2rem;
  letter-spacing: -0.08rem;
  line-height: 1.35;
}
h4 {
  font-size: 1.8rem;
  letter-spacing: -0.05rem;
  line-height: 1.5;
}
h5 {
  font-size: 1.6rem;
  letter-spacing: 0;
  line-height: 1.4;
}
h6 {
  font-size: 1.4rem;
  letter-spacing: 0;
  line-height: 1.2;
}
pre {
  padding: 1em;
}
.container {
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  width: 100%;
}
select {
  width: auto;
}
.phx-hero input {
  background: #000000;
}
/* Headers */
header {
  width: 100%;
  background: #000000;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 2rem;
}
header section {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
header section :first-child {
  order: 2;
}
header section :last-child {
  order: 1;
}
header nav ul,
header nav li {
  margin: 0;
  padding: 0;
  display: block;
  text-align: right;
  white-space: nowrap;
}
header nav ul {
  margin: 1rem;
  margin-top: 0;
}
header nav a {
  display: block;
}
/* Alerts and form errors */
.alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}
.alert-info {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.alert-danger {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.alert p {
  margin-bottom: 0;
}
.alert:empty {
  display: none;
}
.invalid-feedback {
  color: #a94442;
  display: block;
  margin: -1rem 0 2rem;
}
.phx-error {
  opacity: 0.25;
  cursor: not-allowed;
}
.phx-error * {
  pointer-events: none;
}
.building_enabled {
  display: inline-block;
  border-radius: 10px;
  height: 10px;
  width: 10px;
  background-color: #22c21c;
}
.building_disabled {
  display: inline-block;
  border-radius: 10px;
  height: 10px;
  width: 10px;
  background-color: #b31313;
}
.building {
  border-radius: 4px;
  border: 1px solid #606c76;
  display: inline-block;
  padding: 2px;
}
.upgrades {
  border: 1px solid #606c76;
  display: inline-block;
  padding: 2px;
}
.upgrade {
  border: 1px solid #606c76;
  display: inline-block;
  padding: 2px;
}
.upgrade_description {
  font-size: 12px;
}
.number_input {
  display: inline-block;
  width: 4rem;
}`;
