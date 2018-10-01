---
layout: page
title: parts
---
<div align="center" markdown="1">
*Prices and availability are subject to change.*
</div>

<table>
    <thead>
        <tr>
            <th>
                Part
            </th>
            <th>
                Price
            </th>
            <th>
                Details
            </th>
        </tr>
    </thead>
{%- for part in site.data.parts -%}
    <tr>
        <td class="part">
            {{ part.name }}
        </td>
        <td class="price">
            {{ part.price }}
        </td>
        <td>
            {{ part.desc }}
        </td>
    </tr>
{%- endfor -%}
</table>
